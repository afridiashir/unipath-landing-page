import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-20 xl:px-40 relative z-1">
      <div className="bg-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-[800px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Join UniPath today and take the first step towards your dream
            college. Sign up for free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold"
            >
              Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/90  px-8 py-6 text-lg rounded-full font-semibold bg-transparent"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
