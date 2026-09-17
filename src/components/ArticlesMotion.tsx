"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ArticlesMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const header = root.querySelector("header");
      const parts = root.querySelectorAll('[data-article-motion="header"]');
      const rule = root.querySelector('[data-article-motion="rule"]');

      if (header) {
        const entrance = gsap.timeline({
          defaults: { ease: "power2.out", duration: 0.55, immediateRender: false },
          scrollTrigger: { trigger: header, start: "top 88%", once: true },
        });
        if (rule) entrance.from(rule, { scaleX: 0, transformOrigin: "left center", clearProps: "transform" }, 0);
        entrance.from(parts, { opacity: 0, y: 16, stagger: 0.1, clearProps: "opacity,transform" }, 0.08);
      }

      root.querySelectorAll<HTMLElement>('[data-article-motion="card"]').forEach(card => {
        gsap.from(card, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          immediateRender: false,
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: card, start: "top 92%", once: true },
        });
      });

      // Keyboard navigation must never leave a focused link in a fading card.
      const revealFocused = (event: FocusEvent) => {
        if (!(event.target instanceof Element)) return;
        const target = event.target.closest("[data-article-motion]");
        if (target) gsap.getTweensOf(target).forEach(tween => tween.totalProgress(1));
      };
      root.addEventListener("focusin", revealFocused);
      return () => root.removeEventListener("focusin", revealFocused);
    }, root);

    return () => media.revert();
  }, []);

  return <div ref={scope}>{children}</div>;
}
