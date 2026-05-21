import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FreePlatform = () => {
  return (
    <section className="py-24 px-4 md:px-20 xl:px-40 bg-primary">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          High-Quality Admissions Guidance, Accessible To Everyone
        </h2>
        
        <p className="text-lg md:text-xl text-gray-100 mb-6">
          Many Pakistani students applying abroad cannot afford expensive admissions consultants.
        </p>
        
        <p className="text-lg md:text-xl text-gray-100 mb-10">
          UniPath was built to help students apply for Masters programs abroad with stronger guidance and better application strategy, completely free.
        </p>

        <Button variant={"outline"} size="lg" className="px-8 h-14 text-lg">
          Start Free Today <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FreePlatform;
