const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description:
      "Input your academic stats, extracurriculars, and preferences to get personalized college recommendations.",
  },
  {
    number: "02",
    title: "Shortlist Colleges",
    description:
      "Answer a few questions about your interests, grades, and goals. Our AI analyzes thousands of colleges to create your personalized shortlist.",
  },
  {
    number: "03",
    title: "Discover Scholarships",
    description:
      "Find scholarships that match your profile and get notified when you're eligible to apply.",
  },
  {
    number: "04",
    title: "Write & Refine Applications",
    description:
      "Write compelling essays with AI assistance, get feedback from real counselors, and finalize your applications with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary text-white px-4 md:px-20 xl:px-40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works</h2>
        <p className="text-lg text-white/80 max-w-[600px] mx-auto">
          A simple, step-by-step process to navigate the complex world of
          college admissions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-white/20" />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-3xl font-bold mb-8 border-8 border-primary shadow-[0_0_0_4px_rgba(255,255,255,0.1)]">
              {step.number}
            </div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-white/80 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
