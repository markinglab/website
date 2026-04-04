import { Upload, Settings, Zap, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Assignments",
    description: "Import student submissions directly from your LMS or upload files in bulk. We support code, maths, PDFs, and more.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Set Your Rubric",
    description: "Define grading criteria or use our AI-assisted rubric builder. Customize weights, feedback templates, and grading scales.",
  },
  {
    icon: Zap,
    step: "03",
    title: "AI Grades & Reviews",
    description: "Our AI evaluates each submission against your rubric, providing grades and detailed feedback in minutes.",
  },
  {
    icon: Download,
    step: "04",
    title: "Review & Export",
    description: "Review AI suggestions, make adjustments if needed, and export grades directly back to your LMS.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            From Submission to
            <span className="gradient-text"> Feedback in Minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined workflow designed for busy educators. Get started in under 5 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative flex gap-6"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center shadow-soft">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full accent-gradient flex items-center justify-center text-xs font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(50%-4rem)] h-px border-t-2 border-dashed border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
