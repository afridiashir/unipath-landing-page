"use client";
import { useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Complete your profile",
    desc: "Build a strong foundation. A complete profile helps match you with the right colleges and unlocks better essay and recommendation tools.",
    chips: ["Academic scores & GPA", "Extracurriculars", "Awards & achievements", "SAT / ACT / GRE scores"],
    accent: "blue",
  },
  {
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Shortlist colleges",
    desc: "Discover the right fit from thousands of institutions. Filter by location, program, size, and acceptance rate to build your perfect list.",
    chips: ["Filter by location & size", "Match acceptance rates", "Compare programs", "Safety, match & reach"],
    accent: "teal",
  },
  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: "Enhance essays & SOPs",
    desc: "Your essays are what make you unforgettable. Get AI-powered suggestions to sharpen tone, structure, and storytelling across every prompt.",
    chips: ["Personal statement review", "SOP structure & tone", "Prompt-specific tips", "Grammar & flow check"],
    accent: "violet",
  },
  {
    number: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Increase acceptance chances",
    desc: "Get a real-time prediction of your acceptance odds and personalised recommendations to close any profile gaps before you apply.",
    chips: ["Acceptance probability score", "Profile gap analysis", "Deadline tracking", "Recommender guidance"],
    accent: "amber",
  },
];

const accentMap:any = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-200",  icon: "bg-blue-100 text-blue-600",   badge: "bg-blue-100 text-blue-700",   bar: "bg-blue-500",   btn: "bg-blue-600 hover:bg-blue-700",  dot: "bg-blue-500"  },
  teal:   { bg: "bg-teal-50",   border: "border-teal-200",  icon: "bg-teal-100 text-teal-600",   badge: "bg-teal-100 text-teal-700",   bar: "bg-teal-500",   btn: "bg-teal-600 hover:bg-teal-700",  dot: "bg-teal-500"  },
  violet: { bg: "bg-violet-50", border: "border-violet-200",icon: "bg-violet-100 text-violet-600",badge: "bg-violet-100 text-violet-700",bar: "bg-violet-500", btn: "bg-violet-600 hover:bg-violet-700",dot: "bg-violet-500"},
  amber:  { bg: "bg-green-50",  border: "border-green-200", icon: "bg-green-100 text-green-600", badge: "bg-green-100 text-green-700",  bar: "bg-green-500",  btn: "bg-green-600 hover:bg-green-700", dot: "bg-green-500" },
};

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const ChevronIcon = ({ open }:{ open: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function UserJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(new Set());

  const toggleStep = (i:any) => setActiveStep(activeStep === i ? null : i);
  const markDone = (i:any, e:any) => {
    e.stopPropagation();
    const next = new Set(completed);
    next.add(i);
    setCompleted(next);
    const nextOpen = i + 1 < steps.length ? i + 1 : null;
    setActiveStep(nextOpen);
  };
  const undoDone = (i:any, e:any) => {
    e.stopPropagation();
    const next = new Set(completed);
    next.delete(i);
    setCompleted(next);
  };

  const progress = Math.round((completed.size / steps.length) * 100);

  return (
    <div className="w-full max-w-xl mx-auto p-6 font-sans">
      

      {/* Steps */}
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => {
          const isOpen = activeStep === i;
          const isDone = completed.has(i);
          const a = accentMap[step.accent];

          return (
            <div key={i} className="relative flex gap-4">
              {/* Timeline spine */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => toggleStep(i)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 z-10 ${
                    isDone
                      ? "bg-gray-800 text-white"
                      : isOpen
                      ? `${a.icon} ring-2 ring-offset-2 ring-gray-200`
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {isDone ? <CheckIcon /> : step.icon}
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-px flex-1 mt-1 transition-colors duration-300 ${isDone ? "bg-gray-800" : "bg-gray-200"}`} style={{ minHeight: 20 }} />
                )}
              </div>

              {/* Card */}
              <div
                className={`flex-1 mb-3 rounded-xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                  isOpen
                    ? `${a.bg} ${a.border} shadow-sm`
                    : isDone
                    ? "bg-gray-50 border-gray-200"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => toggleStep(i)}
              >
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <span className="text-xs font-medium text-gray-400 tabular-nums">{step.number}</span>
                  <p className={`flex-1 text-sm font-medium transition-colors ${isDone ? "text-gray-400 line-through" : "text-gray-800"}`}>
                    {step.title}
                  </p>
                  {isDone ? (
                    <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">Done</span>
                  ) : isOpen ? (
                    <span className={`text-xs ${a.badge} px-2.5 py-1 rounded-full font-medium`}>In progress</span>
                  ) : null}
                  <ChevronIcon open={isOpen} />
                </div>

                {/* Expanded body */}
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="px-4 pb-4 pt-0 border-t border-gray-200/60">
                    <p className="text-sm text-gray-500 mt-3 mb-3 leading-relaxed">{step.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.chips.map((chip, j) => (
                        <span key={j} className={`text-xs ${a.badge} px-2.5 py-1 rounded-lg font-medium`}>{chip}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {/* <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className={`text-xs font-medium text-white ${a.btn} px-4 py-2 rounded-lg transition-colors`}
                      >
                        Get started →
                      </button> */}
                      {!isDone ? (
                        <button
                          onClick={(e) => markDone(i, e)}
                          className="text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                        >
                            Next
                        </button>
                      ) : (
                        <button
                          onClick={(e) => undoDone(i, e)}
                          className="text-xs font-medium text-gray-400 hover:text-gray-600 px-3 py-2 rounded-lg transition-colors"
                        >
                          Undo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}