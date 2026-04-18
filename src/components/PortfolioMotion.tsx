"use client";

import { useEffect } from "react";

type GsapLike = {
  registerPlugin: (plugin: unknown) => void;
  matchMedia: () => {
    add: (query: string, fn: () => void) => void;
    revert: () => void;
  };
  fromTo: (
    target: string | Element | Element[],
    fromVars: Record<string, unknown>,
    toVars: Record<string, unknown>,
  ) => void;
  utils: {
    toArray: <T extends Element>(selector: string) => T[];
  };
};

declare global {
  interface Window {
    gsap?: GsapLike;
    ScrollTrigger?: {
      getAll: () => { kill: () => void }[];
    };
  }
}

const PortfolioMotion = () => {
  useEffect(() => {
    let rafId = 0;
    let mm: ReturnType<GsapLike["matchMedia"]> | null = null;

    const init = () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        rafId = window.requestAnimationFrame(init);
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-title",
          { y: 50, opacity: 0, filter: "blur(8px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
          },
        );

        gsap.fromTo(
          ".hero-copy, .hero-cta, .hero-social a",
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            delay: 0.2,
            ease: "power2.out",
          },
        );

        gsap.fromTo(
          ".hero-image-wrap",
          { x: 40, opacity: 0, rotate: 3 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.95,
            ease: "power3.out",
            delay: 0.15,
          },
        );

        gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((item, index) => {
          gsap.fromTo(
            item,
            { y: 45, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.02,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 86%",
                once: true,
              },
            },
          );
        });

        gsap.utils
          .toArray<HTMLElement>(".project-card")
          .forEach((card, index) => {
            gsap.fromTo(
              card,
              { y: 35, opacity: 0, scale: 0.98 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.55,
                ease: "power2.out",
                delay: (index % 3) * 0.04,
                scrollTrigger: {
                  trigger: card,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          });
      });
    };

    init();

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      mm?.revert();
      window.ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};

export default PortfolioMotion;
