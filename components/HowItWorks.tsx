"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Build Your Academic Profile",
    description:
      "Tell us about your academics, goals, budget, and preferred countries.",
  },
  {
    number: "02",
    title: "Receive Personalized Guidance",
    description:
      "Explore Masters programs, scholarship opportunities, and ways to improve your applications.",
  },
  {
    number: "03",
    title: "Apply With More Confidence",
    description:
      "Track deadlines, strengthen your SOPs, and make smarter application decisions.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalSteps = steps.length;

      // Set all steps hidden initially except first
      stepRefs.current.forEach((step, i) => {
        if (!step) return;
        gsap.set(step, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 60,
          scale: i === 0 ? 1 : 0.9,
        });
      });

      // Initialize first dot as active
      const firstDot = document.querySelector('[data-dot="0"]');
      if (firstDot) gsap.set(firstDot, { scale: 1.4, opacity: 1 });

      // Pin + scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalSteps * 120}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          onToggle: (self) => {
            if (sectionRef.current) {
              sectionRef.current.style.zIndex = self.isActive ? "50" : "0";
            }
          },
        },
      });

      // Line fills as we progress
      tl.to(
        lineProgressRef.current,
        { scaleX: 2.2, ease: "none", duration: totalSteps - 1 },
        0,
      );

      // Step transitions
      for (let i = 0; i < totalSteps - 1; i++) {
        const current = stepRefs.current[i];
        const next = stepRefs.current[i + 1];
        const currentDot = document.querySelector(`[data-dot="${i}"]`);
        const nextDot = document.querySelector(`[data-dot="${i + 1}"]`);

        // Out: current slides up and fades
        tl.to(
          current,
          { opacity: 0, y: -70, scale: 0.9, duration: 0.45, ease: "power2.in" },
          i + 0.25,
        );

        // Dim current dot
        tl.to(currentDot, { scale: 1, opacity: 0.3, duration: 0.3 }, i + 0.3);

        // In: next slides up from below
        tl.to(
          next,
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" },
          i + 0.55,
        );

        // Light up next dot
        tl.to(nextDot, { scale: 1.4, opacity: 1, duration: 0.3 }, i + 0.55);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-primary text-white flex flex-col justify-center overflow-hidden px-4 md:px-20 xl:px-40 relative"
      style={{ zIndex: 50 }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          How UniPath Works
        </h2>
      </div>

      {/* Progress indicator */}
      <div className="flex items-center justify-center mb-14">
        {steps.map((_, i) => (
          <div key={i} className="flex items-center">
            <div
              data-dot={i}
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: "white",
                opacity: i === 0 ? 1 : 0.25,
                transform: i === 0 ? "scale(1.4)" : "scale(1)",
                transition: "none",
              }}
            />
            {i < steps.length - 1 && (
              <div className="relative w-20 md:w-28 h-[2px] bg-white/20">
                {i === 0 && (
                  <div
                    ref={lineProgressRef}
                    className="absolute inset-0 bg-white origin-left"
                    style={{ transform: "scaleX(0)" }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Steps stacked */}
      <div
        className="relative flex items-center justify-center"
        style={{ height: "300px" }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
            className="absolute inset-0 flex flex-col items-center text-center px-4"
          >
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-3xl font-bold mb-6 border-8 border-primary shadow-[0_0_0_4px_rgba(255,255,255,0.12)]">
              {step.number}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {step.title}
            </h3>
            <p className="text-white/75 leading-relaxed max-w-[520px] text-base md:text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="text-center mt-10 text-white/35 text-xs tracking-[0.2em] uppercase">
        Scroll to explore
      </div>
    </section>
  );
};

export default HowItWorks;
