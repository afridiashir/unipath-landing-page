"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Hamza A.",
    role: "Early Access User",
    content: "Honestly, the program shortlisting was the biggest thing for me. Most students don’t even know what universities they realistically have a shot at. UniPath makes that process way less confusing.",
  },
  {
    name: "Mahnoor K.",
    role: "Beta Tester",
    content: "The SOP feedback is probably going to be a game changer for students applying abroad. It catches weak points you normally wouldn’t notice yourself.",
  },
  {
    name: "Daniyal R.",
    role: "Early User",
    content: "I didn’t realize how scattered the whole process was until I used UniPath. Having scholarships, applications, and deadlines in one place just makes sense.",
  },
  {
    name: "Areeba S.",
    role: "Beta User",
    content: "Most Pakistani students rely on random advice from seniors or consultants. UniPath feels much more personalized and practical.",
  },
  {
    name: "Usman T.",
    role: "Early Access User",
    content: "The scholarship discovery part is huge because students usually miss opportunities simply because they never hear about them.",
  },
  {
    name: "Hira M.",
    role: "Beta Tester",
    content: "This honestly feels like the kind of platform I wish existed when I first started researching Masters programs abroad.",
  },
];

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="py-24 px-4 md:px-20 xl:px-40 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center max-w-4xl mb-16 leading-tight">
          Early Users Are Already Calling UniPath A Must-Have For Masters Applications
        </h2>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3 py-4"
              >
                <div className="bg-white p-8 rounded-3xl h-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-secondary/20 mb-6" />
                    <p className="text-gray-700 leading-relaxed italic mb-8">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
    </section>
  );
};

export default Testimonials;
