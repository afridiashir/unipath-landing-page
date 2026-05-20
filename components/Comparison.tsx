import React from "react";
import { XCircle, CheckCircle2 } from "lucide-react";

const comparisons = [
  {
    traditional: "Expensive fees",
    unipath: "Completely free",
  },
  {
    traditional: "Generic recommendations",
    unipath: "Personalized Masters program matching",
  },
  {
    traditional: "Slow response times",
    unipath: "Instant AI-powered feedback",
  },
  {
    traditional: "Limited office hours",
    unipath: "Accessible anytime",
  },
  {
    traditional: "Often promote partner universities",
    unipath: "Student-first recommendations",
  },
  {
    traditional: "Scattered process",
    unipath: "Everything in one platform",
  },
];

const Comparison = () => {
  return (
    <section className="py-24 px-4 md:px-20 xl:px-40 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-16 leading-tight max-w-3xl">
          Why Students Choose UniPath Instead Of Traditional Consultants
        </h2>

        <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-100">
            <div className="p-6 md:p-8 text-center border-r border-gray-100">
              <h3 className="text-xl font-semibold text-gray-500">Traditional Consultants</h3>
            </div>
            <div className="p-6 md:p-8 text-center bg-primary/5">
              <h3 className="text-xl font-bold text-primary">UniPath</h3>
            </div>
          </div>

          <div className="flex flex-col">
            {comparisons.map((item, index) => (
              <div key={index} className={`grid grid-cols-2 ${index !== comparisons.length - 1 ? 'border-b border-gray-50' : ''}`}>
                <div className="p-6 md:p-8 flex items-center justify-center text-center border-r border-gray-50 gap-3">
                  <XCircle className="w-5 h-5 text-gray-300 hidden md:block shrink-0" />
                  <p className="text-gray-500 font-medium">{item.traditional}</p>
                </div>
                <div className="p-6 md:p-8 flex items-center justify-center text-center bg-primary/5 gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 hidden md:block" />
                  <p className="text-primary font-bold">{item.unipath}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
