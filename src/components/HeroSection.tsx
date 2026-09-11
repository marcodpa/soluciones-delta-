"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import styles from "./HeroSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 192;
const frameUrl = (i: number) => `/hero-frames/frame_${String(i).padStart(4, "0")}.webp`;

export default function HeroSection() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const sceneRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const panel1Ref   = useRef<HTMLDivElement>(null);
  const panel2Ref   = useRef<HTMLDivElement>(null);
  const panel3Ref   = useRef<HTMLDivElement>(null);
  const dot1Ref     = useRef<HTMLDivElement>(null);
  const dot2Ref     = useRef<HTMLDivElement>(null);
  const dot3Ref     = useRef<HTMLDivElement>(null);
  const staticImgRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    const phonePanels = [panel1Ref.current!, panel2Ref.current!, panel3Ref.current!];
    const phoneDots = [dot1Ref.current!, dot2Ref.current!, dot3Ref.current!];
    // Phones: static hero (first frame + timed text rotation). No sticky stage, no canvas, no 192 frames.
    // Safari iOS paints its bottom bar black behind sticky full-screen canvases, and the scrub is heavy on mobile.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      const phoneScope = gsap.context(() => {
        gsap.set(phonePanels, { autoAlpha: 0, y: 24 });
        gsap.set(phonePanels[0], { autoAlpha: 1, y: 0 });
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const hold = 6;
        const loop = gsap.timeline({ repeat: -1 });
        for (let index = 0; index < 3; index++) {
          const next = (index + 1) % 3;
          const at = (index + 1) * hold;
          loop.to(phonePanels[index], { autoAlpha: 0, y: -16, duration: 0.5, ease: "power2.in" }, at - 0.5);
          loop.fromTo(phonePanels[next], { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, at);
          loop.to(phoneDots[index], { scaleX: 6 / 22, background: "rgba(255,255,255,0.28)", duration: 0.3 }, at);
          loop.to(phoneDots[next], { scaleX: 1, background: "#30d158", duration: 0.3 }, at);
        }
      }, wrapperRef);
      return () => phoneScope.revert();
    }

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const controller = new AbortController();
    const blobs: (Blob | undefined)[] = new Array(FRAME_COUNT);
    const cache = new Map<number, ImageBitmap>();
    const pending = new Set<number>();
    const state = { frame: 0 };
    let disposed = false;
    let drawn = -1;
    let timeline: gsap.core.Timeline | undefined;
    const scope = gsap.context(() => {}, wrapperRef);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panels = [panel1Ref.current!, panel2Ref.current!, panel3Ref.current!];

    const paint = (index: number) => {
      const bitmap = cache.get(index);
      if (!bitmap || disposed) return;
      const scale = Math.max(canvas.width / bitmap.width, canvas.height / bitmap.height);
      const w = bitmap.width * scale, h = bitmap.height * scale;
      ctx.drawImage(bitmap, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
      drawn = index;
    };
    const decode = async (index: number) => {
      if (disposed || !blobs[index] || cache.has(index) || pending.has(index)) return;
      pending.add(index);
      try {
        const bitmap = await createImageBitmap(blobs[index]!);
        const target = Math.round(state.frame);
        if (disposed || Math.abs(index - target) > 20) { bitmap.close(); return; }
        cache.set(index, bitmap);
        if (index === target || drawn < 0) paint(index);
        // Keep decoded GPU memory bounded, including after fast scroll jumps.
        for (const [key, value] of cache) {
          if (Math.abs(key - target) > 16) { value.close(); cache.delete(key); }
        }
      } catch { /* The static image remains available if decoding fails. */ }
      finally { pending.delete(index); }
    };
    const render = () => {
      const target = Math.round(state.frame);
      if (target !== drawn) paint(target);
      void decode(target);
      for (let distance = 1; distance <= 8; distance++) {
        void decode(target + distance);
        void decode(target - distance);
      }
    };
    const resize = () => {
      canvas.width = Math.min(window.innerWidth * Math.min(window.devicePixelRatio, 1.5), 1920);
      canvas.height = canvas.width * (canvas.clientHeight / canvas.clientWidth);
      drawn = -1;
      render();
    };
    resize();
    window.addEventListener("resize", resize);

    const start = () => {
      if (disposed) return;
      scope.add(() => {
        gsap.set(sceneRef.current, { opacity: 1, scale: 1 });
        gsap.set(overlayRef.current, { opacity: 1 });
        gsap.set(panels, { autoAlpha: 0, y: 32 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });
        // One timeline owns all scroll-dependent properties in both directions.
        timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: reducedMotion ? true : 0.45,
            invalidateOnRefresh: true,
          },
        });
        timeline.to(state, {
          frame: reducedMotion ? 0 : FRAME_COUNT - 1,
          duration: 1, ease: "none", onUpdate: render,
        }, 0);
        timeline.to(panels[0], { autoAlpha: 0, y: -24, duration: 0.07, ease: "none" }, 0.25);
        timeline.to(panels[1], { autoAlpha: 1, y: 0, duration: 0.07, ease: "none" }, 0.36);
        timeline.to(panels[1], { autoAlpha: 0, y: -24, duration: 0.07, ease: "none" }, 0.59);
        timeline.to(panels[2], { autoAlpha: 1, y: 0, duration: 0.08, ease: "none" }, 0.70);
        const dots = [dot1Ref.current, dot2Ref.current, dot3Ref.current];
        for (const [index, position] of [0.34, 0.68].entries()) {
          timeline.to(dots[index], { scaleX: 6 / 22, background: "rgba(255,255,255,0.28)", duration: 0.04 }, position);
          timeline.to(dots[index + 1], { scaleX: 1, background: "#30d158", duration: 0.04 }, position);
        }
        // Synchronize with restored scroll before uncovering the hero.
        timeline.scrollTrigger?.refresh();
        timeline.progress(timeline.scrollTrigger?.progress ?? 0);
        render();

      });
    };
    const load = async () => {
      let next = 0;
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      const worker = async () => {
        while (!disposed && next < (reducedMotion ? 1 : FRAME_COUNT)) {
          const index = next++;
          try {
            const response = await fetch(frameUrl(index), { signal: controller.signal });
            if (response.ok) blobs[index] = await response.blob();
          } catch { /* Failed frames use their nearest available neighbour below. */ }
          if (disposed) return;

        }
      };
      await Promise.all(Array.from({ length: 6 }, worker));
      window.clearTimeout(timeout);
      if (disposed) return;
      // Missing downloads must not leave holes in the scroll sequence.
      const available = blobs.map((blob, index) => blob ? index : -1).filter(index => index >= 0);
      if (available.length) {
        for (let index = 0; index < FRAME_COUNT; index++) {
          if (!blobs[index]) {
            const nearest = available.reduce((a, b) => Math.abs(b - index) < Math.abs(a - index) ? b : a);
            blobs[index] = blobs[nearest];
          }
        }
        await decode(0);
      }
      start();
    };
    void load();
    return () => {
      disposed = true;
      controller.abort();
      window.removeEventListener("resize", resize);
      scope.revert();
      cache.forEach(bitmap => bitmap.close());
      cache.clear();
    };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.stage}>

          {/* Static image stays behind the canvas as a loading fallback. */}
          <img
            ref={staticImgRef}
            src="/frames/frame_0000.webp"
            alt="Servicios industriales para la industria petrolera venezolana"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          {/* Permanent dark overlay on the static image (visible before GSAP runs) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 1,
              background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1, background: "linear-gradient(to top, rgba(0,0,0,0.70) 0%, transparent 50%)" }}
          />

          {/* Scene (scaled for zoom effect) */}
          <div
            ref={sceneRef}
            className="absolute inset-0"
            style={{ transformOrigin: "center center", willChange: "transform", opacity: 0, zIndex: 2 }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ display: "block" }}
            />
          </div>

          {/* Gradient overlay (GSAP-animated, on top of canvas) */}
          <div
            ref={overlayRef}
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0,
              zIndex: 3,
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          <div className={styles.content}>
            <div ref={panel1Ref} className={styles.panel} style={{ opacity: 1, visibility: "visible" }}>
              <Eyebrow>Soluciones Delta · Zulia, Venezuela</Eyebrow>
              <h1 className={styles.title}>Servicios <br />petroleros <span className={styles.location}>en Venezuela.</span></h1>
              <p className={styles.description}>
                Bombeo, manejo de fluidos y servicios industriales en Venezuela.
                Respaldo técnico desde nuestra sede en Zulia.
              </p>
            </div>

            <div ref={panel2Ref} className={styles.panel} style={{ opacity: 0, visibility: "hidden" }}>
              <Eyebrow>Equipamiento y operación</Eyebrow>
              <h2 className={styles.title}>Equipos propios.<br /><span>Respaldo técnico.</span></h2>
              <p className={styles.description}>
                Unidades vacuum y personal especializado para el traslado
                y manejo de fluidos en la industria petrolera.
              </p>
            </div>

            <div ref={panel3Ref} className={styles.panel} style={{ opacity: 0, visibility: "hidden" }}>
              <Eyebrow>Trabajemos juntos</Eyebrow>
              <h2 className={styles.title}>Soluciones para<br /><span>su operación.</span></h2>
              <p className={styles.description}>
                Cuéntenos qué necesita. Nuestro equipo le ayudará a definir
                el servicio adecuado para su proyecto.
              </p>
              <div className={styles.actions}>
                <a href="#servicios" className={styles.primaryLink}>
                  Conocer servicios
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/contacto" className={styles.secondaryLink}>Contáctenos</Link>
              </div>
            </div>
          </div>

          <div className={styles.scrollCue} aria-hidden="true">
            <span className={styles.scrollLine} />
            <span>Explore nuestros servicios</span>
          </div>

          {/* ── DOTS ── */}
          <div className={styles.dots} aria-hidden="true">
            <div ref={dot1Ref} style={{ width: 22, height: 6, borderRadius: 9999, background: "#30d158", willChange: "transform, background", transformOrigin: "left center" }} />
            <div ref={dot2Ref} style={{ width: 22, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)", willChange: "transform, background", transformOrigin: "left center", transform: "scaleX(0.273)" }} />
            <div ref={dot3Ref} style={{ width: 22, height: 6, borderRadius: 9999, background: "rgba(255,255,255,0.28)", willChange: "transform, background", transformOrigin: "left center", transform: "scaleX(0.273)" }} />
          </div>

        </div>
      </div>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}
