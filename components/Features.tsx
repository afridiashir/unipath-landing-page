import {
  BookOpen,
  Target,
  Zap,
  LayoutDashboard,
  Brain,
  FileCheck,
} from "lucide-react";

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
  return (
    <section className="py-12 bg-white px-4 md:px-20 xl:px-40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Everything you need to get accepted
        </h2>
        <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
          Our platform provides comprehensive tools to streamline your entire
          college application process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
