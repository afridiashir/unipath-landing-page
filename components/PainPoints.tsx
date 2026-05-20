import React from "react";
import { AlertCircle } from "lucide-react";

const painPoints = [
  "Finding scholarships they actually qualify for",
  "Choosing the right universities for their profile",
  "Writing strong SOPs and applications",
  "Understanding different admissions requirements",
  "Keeping track of deadlines and documents",
  "Paying expensive consultant fees without personalized guidance",
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 md:px-20 xl:px-40">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Applying Abroad For A Masters Shouldn’t Feel This Overwhelming
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Most Pakistani students struggle with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left mb-12">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
              <p className="text-gray-800 font-medium">{point}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 w-full">
          <p className="text-lg md:text-xl font-semibold text-primary">
            UniPath brings everything into one platform so students can apply abroad with more clarity, confidence, and strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
