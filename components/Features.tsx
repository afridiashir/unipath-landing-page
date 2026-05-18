"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  BookOpen,
  Target,
  Zap,
  LayoutDashboard,
  Brain,
  FileCheck,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    title: "AI Essay Review",
    description:
      "Get instant, actionable feedback on your personal statement and supplemental essays.",
    icon: FileCheck,
  },
  {
    title: "Smart College Matching",
    description:
      "Find your reach, match, and safety schools based on your unique profile and preferences.",
    icon: Target,
  },
  {
    title: "Application Tracking",
    description:
      "Stay on top of deadlines and requirements for all your target universities in one place.",
    icon: LayoutDashboard,
  },
  {
    title: "Extracurricular Strategy",
    description:
      "Optimize your activity list to highlight leadership, impact, and commitment.",
    icon: Zap,
  },
  {
    title: "Interview Prep",
    description:
      "Practice with AI-simulated interviews tailored to specific university questions.",
    icon: Brain,
  },
  {
    title: "Resource Library",
    description:
      "Access hundreds of successful essays and comprehensive guides for every step.",
    icon: BookOpen,
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
    <section className="py-12 bg-white px-4 md:px-20 xl:px-40 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Everything you need to get accepted
        </h2>

        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Our platform provides comprehensive tools to streamline your entire
          college application process.
        </p>
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
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/4"
            >
              <div className="h-[350px] p-8 rounded-2xl bg-gray-50 border border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div className="w-24 h-24 text-primary">
                  <feature.icon className="w-16 h-16" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>

                  <p className="h-16 text-gray-600 leading-relaxed">
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
