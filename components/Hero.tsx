import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="overflow-visible bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="max-h-screen flex items-center justify-start pt-48 pb-48 md:pt-48 flex-col px-4 md:px-20 xl:px-40 gap-4">
        <p className="flex items-center gap-2 text-sm text-black font-medium text-center border border-secondary/20 rounded-full px-8 py-2 uppercase">
          Built for Pakistani students applying abroad for Masters programs
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] max-w-[900px] font-semibold text-primary text-center">
          Increase Your Chances of Scholarships & Masters Admissions Abroad
        </h1>

        <p className="text-base font-body md:text-xl text-primary text-center max-w-[800px]">
          UniPath helps Pakistani students discover better-fit Masters programs, improve their applications, and apply abroad more strategically, completely free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button variant={"secondary"} size="lg">
            Check My Scholarship Chances <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant={"outline"} size="lg" className="bg-white">
            Explore Masters Programs
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-8 text-sm md:text-base text-gray-700 font-medium">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            Scholarship-focused guidance
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            SOP & application feedback
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            Personalized university matching
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-secondary" />
            Completely free platform
          </div>
        </div>
      </div>

      {/* Dashboard Image */}
      {/* <div className="flex mt-24 mb-24 items-center justify-center  px-4 md:px-20 xl:px-40">
        <div className="border rounded-2xl overflow-hidden shadow-2xl max-w-[1000px]">
          <img
            src="/dashboard.png"
            alt="hero"
            className=" object-cover"
            loading="eager"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
