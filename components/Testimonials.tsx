"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "UniPath completely transformed my application process. The AI essay feedback was incredibly specific and helped me find my unique voice. I just got accepted into my dream school!",
    author: "Sarah J.",
    role: "Admitted to Stanford University",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "As a first-generation student, I had no idea where to start. The college matching feature helped me discover amazing schools I wouldn't have considered otherwise.",
    author: "Michael T.",
    role: "Admitted to MIT",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote:
      "The application tracker kept me sane during the fall semester. Having all deadlines and requirements in one dashboard saved me so much stress.",
    author: "Emily R.",
    role: "Admitted to Brown University",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "The interview prep simulator made me feel so confident before my admissions interviews. The questions felt incredibly realistic.",
    author: "David L.",
    role: "Admitted to Harvard University",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote:
      "I improved my personal statement in just two days using the AI suggestions. It highlighted weak areas I never noticed myself.",
    author: "Sophia M.",
    role: "Admitted to Columbia University",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote:
      "UniPath helped me organize everything from essays to deadlines. It felt like having a private admissions counselor 24/7.",
    author: "James K.",
    role: "Admitted to UC Berkeley",
    image: "https://i.pravatar.cc/150?img=68",
  },
];

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="py-24 bg-gray-50 px-4 md:px-20 xl:px-40 overflow-hidden relative z-1">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Trusted by 1000+ students
        </h2>

        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Join thousands of students who have successfully navigated the college
          admissions process with UniPath.
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative p-8 rounded-2xl bg-white shadow-sm border border-gray-300 flex flex-col justify-between h-full hover:shadow-md transition-all duration-300">
                <div className="text-5xl z-0 absolute top-0 right-0">
                  <Quote
                    fill="#FFEE8C"
                    strokeWidth={0}
                    className="w-36 h-36 "
                  />
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                  />

                  <div>
                    <p className="font-bold text-primary">
                      {testimonial.author}
                    </p>

                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-24 text-gray-700 italic flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;
