import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-visible">
      <div className="min-h-screen flex items-center justify-center pt-24 flex-col px-4 md:px-20 xl:px-40 gap-6 bg-gradient-to-t from-yellow-50/40 to-white">
        <p className="flex items-center gap-2 text-sm text-black font-medium text-center border border-secondary/20 rounded-full px-8 py-2">
          <Sparkles className="w-4 h-4" />
          AI-powered college admissions
        </p>

        <h1 className="text-3xl md:text-6xl leading-[1.15] max-w-[800px] font-bold text-primary text-center">
          Your{" "}
          <span className="bg-yellow-100 px-2 py-2 rounded-lg">
            personal guide
          </span>{" "}
          to getting into your dream college
        </h1>

        <p className="text-base md:text-xl text-primary text-center max-w-[700px]">
          UniPath analyzes thousands of successful applications to give you
          personalized essay feedback, college matches, and a roadmap to
          admission.
        </p>

        <div className="flex flex-row gap-4">
          <Button variant={"secondary"} size="lg">
            Get Started <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="relative -translate-y-[30%] lg:-translate-y-[20%] flex items-center justify-center  px-4 md:px-20 xl:px-40">
        <div className="border rounded-2xl overflow-hidden shadow-2xl max-w-[1000px]">
          <img
            src="/dashboard.png"
            alt="hero"
            className=" object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
