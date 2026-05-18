import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="overflow-visible bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="max-h-screen flex items-center justify-start pt-48 md:pt-48 flex-col px-4 md:px-20 xl:px-40 gap-4">
        <p className="flex items-center gap-2 text-sm text-black font-medium text-center border border-secondary/20 rounded-full px-8 py-2 uppercase">
          Trusted by 1000+ students
        </p>

        <h1 className="text-5xl md:text-6xl leading-[1.15] max-w-[800px] font-semibold text-primary text-center">
          One-stop solution for all college apps
        </h1>

        <p className="text-base font-body md:text-xl text-primary text-center max-w-[700px]">
          Get matched. Score scholarships.
          <br /> Ace essays. Get admission offers.
        </p>

        <div className="flex flex-row gap-4">
          <Button variant={"secondary"} size="lg">
            Get Started <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="flex mt-24 items-center justify-center  px-4 md:px-20 xl:px-40">
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
