import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const points = [
  "Identify better-fit Masters programs",
  "Discover relevant scholarship opportunities",
  "Improve application quality",
  "Make smarter application decisions",
];

const ScholarshipPositioning = () => {
  return (
    <section id="scholarships" className="py-24 px-4 md:px-20 xl:px-40 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
            Apply More Strategically For Scholarships Abroad
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Scholarships are highly competitive, and many students apply blindly without understanding where they realistically have stronger chances.
          </p>

          <div className="space-y-4">
            <p className="font-semibold text-primary text-lg">UniPath helps students:</p>
            <ul className="space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm mt-8">
            <p className="text-primary font-medium italic">
              "The goal is simple: help students maximize their chances while reducing confusion and unnecessary application costs."
            </p>
          </div>
        </div>

        <div className="flex-1 w-full flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl -z-10 w-[80%] h-[80%] m-auto" />
          <img 
            src="/dashboard.png" 
            alt="Scholarship Dashboard" 
            className="rounded-2xl border border-gray-200 shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ScholarshipPositioning;
