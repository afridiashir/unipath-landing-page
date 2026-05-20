"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is UniPath really free?",
    answer: "Yes. UniPath is completely free for students.",
  },
  {
    question: "Does UniPath guarantee scholarships or admissions?",
    answer: "No platform can guarantee outcomes. UniPath helps students make smarter and more strategic application decisions to improve their chances.",
  },
  {
    question: "Is UniPath specifically for Masters applications?",
    answer: "Yes. UniPath is designed specifically for Pakistani students applying abroad for Masters programs.",
  },
  {
    question: "Which countries does UniPath support?",
    answer: "UniPath supports applications for the UK, USA, Canada, Europe, Australia, and more.",
  },
  {
    question: "Can UniPath help improve my SOP?",
    answer: "Yes. UniPath provides AI-powered feedback to help strengthen statements of purpose and application essays.",
  },
  {
    question: "How does UniPath recommend universities?",
    answer: "Recommendations are based on your academic profile, goals, budget, and preferences.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 md:px-20 xl:px-40 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-secondary/50 shadow-sm' : 'border-gray-200'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-primary text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180 text-secondary' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
