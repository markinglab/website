import { Brain, Clock, MessageSquareText, Shield, BarChart3, Puzzle } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Assessment",
    description: "Our AI understands context, not just keywords. Grade code, mathematics and complex answers with human-like comprehension.",
  },
  {
    icon: Clock,
    title: "80% Time Saved",
    description: "What used to take hours now takes minutes. Batch grade entire classes while maintaining consistent, fair evaluation.",
  },
  {
    icon: MessageSquareText,
    title: "Personalized Feedback",
    description: "Every student receives detailed, constructive feedback tailored to their specific work and learning journey.",
  },
  {
    icon: Shield,
    title: "Academic Integrity",
    description: "Built-in plagiarism detection and AI-content identification ensures authentic student work evaluation.",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    description: "Track student progress, identify knowledge gaps, and generate insights to improve your teaching.",
  },
  {
    icon: Puzzle,
    title: "LMS Integration",
    description: "Seamlessly connects with Canvas, Blackboard, Moodle, and other major learning management systems.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="gradient-text"> Smarter Grading</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed specifically for post-secondary education. From code reviews to mathematical marking, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-medium"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
