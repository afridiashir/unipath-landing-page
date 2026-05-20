"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Search,
  Award,
  FileText,
  CalendarCheck,
  Mic,
  TrendingUp,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "Find Masters Programs That Match Your Profile",
    description:
      "Get personalized university recommendations based on your academics, goals, budget, and preferred countries.",
    icon: Search,
  },
  {
    title: "Discover Scholarship Opportunities",
    description:
      "Find scholarships and financial support opportunities relevant to your profile and interests.",
    icon: Award,
  },
  {
    title: "Improve Your SOP & Applications",
    description:
      "Receive instant AI-powered feedback to strengthen your statement of purpose and application essays.",
    icon: FileText,
  },
  {
    title: "Track Every Deadline In One Place",
    description:
      "Stay organized with application requirements, submissions, and deadlines across universities.",
    icon: CalendarCheck,
  },
  {
    title: "Prepare For Admissions Interviews",
    description:
      "Practice realistic interview questions tailored to Masters applications.",
    icon: Mic,
  },
  {
    title: "Build A Stronger Overall Profile",
    description:
      "Get recommendations to improve your academic and extracurricular positioning.",
    icon: TrendingUp,
  },
];

const Features = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section id="features" className="py-20 px-4 md:px-20 xl:px-40 overflow-hidden bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Everything You Need To Build A Stronger Masters Application
        </h2>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {features.map((feature, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/4 py-4"
            >
              <div className="h-[380px] p-8 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg hover:border-secondary/30 transition-all duration-300 flex flex-col justify-between">
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-secondary mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Features;
