import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-20 xl:px-40 relative z-1">
      <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Masters Application <br /> Deserves A Smarter Strategy
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            UniPath helps Pakistani students apply abroad with more clarity, stronger applications, and better scholarship positioning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full sm:w-auto px-8 bg-white text-secondary hover:bg-gray-100 py-6 text-lg rounded-full font-semibold">
              Check My Scholarship Chances <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
