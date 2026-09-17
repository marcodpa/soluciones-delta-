"use client";

import { useLocale, useLocalizedTree } from "@/lib/i18n/client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import styles from "./HeroSection.module.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FRAME_RATE = 24;
const EXIT_PROGRESS = 0.74;

export default function HeroSection() {
  const localize = useLocalizedTree();
  const locale = useLocale();
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const panel1Ref   = useRef<HTMLDivElement>(null);
  const panel2Ref   = useRef<HTMLDivElement>(null);
  const panel3Ref   = useRef<HTMLDivElement>(null);
  const dot1Ref     = useRef<HTMLDivElement>(null);
  const dot2Ref     = useRef<HTMLDivElement>(null);
  const dot3Ref     = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({ allScreens: "(min-width: 0px)", reducedMotion: "(prefers-reduced-motion: reduce)" }, (context) => {
      if (context.conditions?.reducedMotion) {
        const still = gsap.context(() => {
          gsap.set([panel1Ref.current, panel2Ref.current, panel3Ref.current], { autoAlpha: 0 });
          gsap.set(panel1Ref.current, { autoAlpha: 1, y: 0 });
        }, wrapperRef);
        return () => still.revert();
      }

      const video = videoRef.current!;
      const wrapper = wrapperRef.current!;
      const state = { progress: 0 };
      let disposed = false;
      let seekFrame = 0;
      let timeline: gsap.core.Timeline | undefined;
      let exitTween: gsap.core.Tween | undefined;
      let exitDelay: gsap.core.Tween | undefined;
      let synchronizing = true;
      let advancedThroughHero = false;
      let exitUsed = false;
      let restoreScrollBehavior: (() => void) | undefined;
      const scope = gsap.context(() => {}, wrapperRef);
      const panels = [panel1Ref.current!, panel2Ref.current!, panel3Ref.current!];

      const cancelExit = () => {
        exitDelay?.kill();
        exitTween?.kill();
        restoreScrollBehavior?.();
        exitDelay = undefined;
      };
      const handleWheel = (event: WheelEvent) => {
        if (exitTween) { cancelExit(); return; }
        if (!exitDelay) return;
        if (event.deltaY < 0) { exitUsed = true; cancelExit(); }
        else exitDelay.restart(true);
      };
      const cancelOnKey = (event: KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " ", "Escape", "Tab"].includes(event.key)) cancelExit();
      };
      const continueToContent = () => {
        const trigger = timeline?.scrollTrigger;
        if (synchronizing || exitUsed || exitDelay || !advancedThroughHero || !trigger || trigger.direction < 0 || trigger.progress < EXIT_PROGRESS || video.readyState < 2 || video.currentTime < (video.duration - 1 / FRAME_RATE) * EXIT_PROGRESS) return;
        // A restored scroll position or an anchor jump must never pull the visitor back.
        if (window.scrollY > trigger.end + window.innerHeight * 0.3 || document.hidden) return;
        const nextSection = wrapperRef.current?.nextElementSibling;
        if (!(nextSection instanceof HTMLElement)) return;
        exitDelay = gsap.delayedCall(0.3, () => {
          exitUsed = true;
          exitDelay = undefined;
          if (disposed || document.hidden) return;
          const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 80;
          const target = window.scrollY + nextSection.getBoundingClientRect().top - navHeight;
          if (target <= window.scrollY) return;
          // Native smooth scrolling would otherwise compete with the GSAP scroll tween.
          const root = document.documentElement;
          const originalBehavior = root.style.scrollBehavior;
          root.style.scrollBehavior = "auto";
          restoreScrollBehavior = () => {
            root.style.scrollBehavior = originalBehavior;
            restoreScrollBehavior = undefined;
          };
          exitTween = gsap.to(window, {
            scrollTo: { y: target, autoKill: true, onAutoKill: () => restoreScrollBehavior?.() },
            duration: 1.7,
            ease: "power2.inOut",
            overwrite: "auto",
            onComplete: () => restoreScrollBehavior?.(),
            onInterrupt: () => restoreScrollBehavior?.(),
          });
        });
      };
      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("touchstart", cancelExit, { passive: true });
      window.addEventListener("pointerdown", cancelExit, { passive: true });
      window.addEventListener("keydown", cancelOnKey);
      document.addEventListener("visibilitychange", cancelExit);

      // Keep one native seek in flight; newer scroll positions replace queued ones.
      // The browser downloads and decodes the fast-start video without 192 JS fetches.
      const render = () => {
        if (disposed || seekFrame) return;
        seekFrame = window.requestAnimationFrame(() => {
          seekFrame = 0;
          if (disposed || video.readyState < 1 || video.seeking || !Number.isFinite(video.duration)) return;
          const lastFrame = Math.max(0, video.duration - 1 / FRAME_RATE);
          const target = Math.min(lastFrame, Math.round(state.progress * lastFrame * FRAME_RATE) / FRAME_RATE);
          if (Math.abs(video.currentTime - target) > 0.5 / FRAME_RATE) video.currentTime = target;
          else continueToContent();
        });
      };
      const onReady = () => {
        video.dataset.ready = "true";
        render();
      };
      const onSeeked = () => {
        onReady();
        continueToContent();
      };
      const onError = () => {
        cancelExit();
        timeline?.scrollTrigger?.kill();
        timeline?.kill();
        wrapper.setAttribute("data-static", "true");
        video.dataset.ready = "false";
        gsap.set(panels, { autoAlpha: 0 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });
        ScrollTrigger.refresh();
      };
      video.addEventListener("loadedmetadata", render);
      video.addEventListener("loadeddata", onReady);
      video.addEventListener("seeked", onSeeked);
      video.addEventListener("error", onError);
      const source = video.querySelector("source");
      source?.addEventListener("error", onError);

      const start = () => {
        if (disposed || timeline) return;
        scope.add(() => {
          gsap.set(panels, { autoAlpha: 0, y: 32 });
          gsap.set(panels[0], { autoAlpha: 1, y: 0 });
          // One timeline owns all scroll-dependent properties in both directions.
          timeline = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              // The final quarter keeps playing as the sticky stage leaves the viewport.
              end: () => {
                const navHeight = document.querySelector("nav")?.getBoundingClientRect().height ?? 80;
                return `+=${Math.max(1, wrapperRef.current!.offsetHeight - navHeight - window.innerHeight * 0.18)}`;
              },
              scrub: 0.45,
              invalidateOnRefresh: true,
              onUpdate: (trigger) => {
                if (synchronizing) return;
                if (trigger.direction > 0 && trigger.progress > 0.02 && trigger.progress < EXIT_PROGRESS) advancedThroughHero = true;
                if (trigger.direction < 0) cancelExit();
                continueToContent();
              },
            },
          });
          timeline.to(state, {
            progress: 1,
            duration: 1, ease: "none", onUpdate: render,
          }, 0);
          timeline.to(panels[0], { autoAlpha: 0, y: -24, duration: 0.07, ease: "none" }, 0.25);
          timeline.to(panels[1], { autoAlpha: 1, y: 0, duration: 0.07, ease: "none" }, 0.35);
          timeline.to(panels[1], { autoAlpha: 0, y: -24, duration: 0.07, ease: "none" }, 0.53);
          timeline.to(panels[2], { autoAlpha: 1, y: 0, duration: 0.08, ease: "none" }, 0.63);
          const dots = [dot1Ref.current, dot2Ref.current, dot3Ref.current];
          for (const [index, position] of [0.34, 0.62].entries()) {
            timeline.to(dots[index], { scaleX: 6 / 22, background: "rgba(255,255,255,0.28)", duration: 0.04 }, position);
            timeline.to(dots[index + 1], { scaleX: 1, background: "#30d158", duration: 0.04 }, position);
          }
          // Synchronize with restored scroll before uncovering the hero.
          timeline.scrollTrigger?.refresh();
          timeline.progress(timeline.scrollTrigger?.progress ?? 0);
          render();
          synchronizing = false;

        });
      };
      start();
      if (video.readyState >= 2) onReady();
      if (video.error) onError();
      return () => {
        disposed = true;
        window.cancelAnimationFrame(seekFrame);
        cancelExit();
        video.removeEventListener("loadedmetadata", render);
        video.removeEventListener("loadeddata", onReady);
        video.removeEventListener("seeked", onSeeked);
        video.removeEventListener("error", onError);
        source?.removeEventListener("error", onError);
        delete video.dataset.ready;
        wrapper.removeAttribute("data-static");
        window.removeEventListener("wheel", handleWheel);
        window.removeEventListener("touchstart", cancelExit);
        window.removeEventListener("pointerdown", cancelExit);
        window.removeEventListener("keydown", cancelOnKey);
        document.removeEventListener("visibilitychange", cancelExit);
        scope.revert();
      };
    });
    return () => media.revert();
  }, []);

  return localize((
    <>
      {/* ── HERO ── */}
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.stage}>

          {/* The poster and native video are discoverable before React hydrates. */}
          <link rel="preload" as="image" href="/hero-delta-poster.webp" type="image/webp" fetchPriority="high" />
          <img
            src="/hero-delta-poster.webp"
            alt="Servicios industriales para la industria petrolera venezolana"
            fetchPriority="high"
            decoding="async"
            width="1280"
            height="720"
            className={styles.poster}
          />
          <video
            ref={videoRef}
            className={styles.video}
            poster="/hero-delta-poster.webp"
            preload="auto"
            muted
            playsInline
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            width="1920"
            height="1080"
          >
            <source src="/hero-scroll-v2.mp4" type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
          </video>
          <div className={styles.shade} aria-hidden="true" />
          <div className={styles.content}>
            <div ref={panel1Ref} className={styles.panel} style={{ opacity: 1, visibility: "visible" }}>
              <Eyebrow>Soluciones Delta · Zulia, Venezuela</Eyebrow>
              <h1 className={styles.title}>{locale === "en" ? "Oilfield" : "Servicios"} <br />{locale === "en" ? "services" : "petroleros"} <span className={styles.location}>{locale === "en" ? "in Venezuela." : "en Venezuela."}</span></h1>
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
  ));
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  const localize = useLocalizedTree();
  return localize(<p className={styles.eyebrow}>{children}</p>);
}
