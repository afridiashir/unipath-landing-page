import React from "react";
import { Layout, CheckSquare, Search, FileEdit } from "lucide-react";

const features = [
  {
    title: "Scholarship Matching",
    description: "Discover opportunities perfectly aligned with your profile.",
    icon: Search,
  },
  {
    title: "SOP Analysis",
    description: "Get AI-driven feedback to perfect your essays.",
    icon: FileEdit,
  },
  {
    title: "University Recommendations",
    description: "Data-backed shortlisting for better chances.",
    icon: Layout,
  },
  {
    title: "Application Tracking",
    description: "Never miss a deadline or requirement.",
    icon: CheckSquare,
  },
];

const ProductPreview = () => {
  return (
    <section className="py-24 px-4 md:px-20 xl:px-40 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Designed To Simplify The Entire Application Process
        </h2>
        <p className="text-xl text-gray-500 font-medium italic mb-16">
          "Finally, everything is in one place."
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <img 
            src="/dashboard.png" 
            alt="UniPath Platform Preview" 
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
