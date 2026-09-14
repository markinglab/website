import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Basic",
    description: "Essential grading tools for educators",
    features: [
      "Automated marking for coding, Mathmetical & Text assignments",
      "AI-powered grading with contextual understanding",
      "Personalized student feedback",
      "LMS integration (Canvas, D2L, Moodle and more) (Coming Soon)",
    ],
    highlighted: false,
  },
  {
    name: "Advanced",
    description: "Complete analytics suite for data-driven teaching",
    features: [
      "Everything in Base, plus:",
      "Class-level performance analytics",
      "Knowledge gap identification",
      "Custom analytics dashboards",
      "Priority support",
    ],
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-accent font-medium text-sm tracking-wide uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your institution's needs. Contact us for features tailored to your requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlighted
                  ? "border-accent shadow-glow"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="accent-gradient text-accent-foreground text-sm font-medium px-4 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-display text-2xl font-bold text-foreground">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  {tier.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-lg font-medium text-foreground">
                    Contact for Pricing
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full accent-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  variant={tier.highlighted ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={() => window.open('https://forms.cloud.microsoft/r/j4gQi2bAdE', '_blank') }
                >
                  Request Pricing
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution for your institution?{" "}
            <a href="#contact" className="text-accent hover:underline font-medium">
              Contact our sales team
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
