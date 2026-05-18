import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "UniPath completely transformed my application process. The AI essay feedback was incredibly specific and helped me find my unique voice. I just got accepted into my dream school!",
    author: "Sarah J.",
    role: "Admitted to Stanford University",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote: "As a first-generation student, I had no idea where to start. The college matching feature helped me discover amazing schools I wouldn't have considered otherwise.",
    author: "Michael T.",
    role: "Admitted to MIT",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    quote: "The application tracker kept me sane during the fall semester. Having all deadlines and requirements in one dashboard saved me so much stress.",
    author: "Emily R.",
    role: "Admitted to Brown University",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 px-4 md:px-20 xl:px-40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Loved by students</h2>
        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Join thousands of students who have successfully navigated the college admissions process with UniPath.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-8 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20" />
              <div>
                <p className="font-bold text-primary">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
