import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.5) {
        videoEl.play().catch(() => {});
      } else {
        videoEl.pause();
      }
    }, { threshold: [0, 0.5, 1] });

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  return <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-delayed" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a2747' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center pt-12 pb-8">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-background border border-primary/20 rounded-full px-5 py-2.5 mb-6 animate-fade-in shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">H</div>
              <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">S</div>
              <div className="w-6 h-6 rounded-full bg-primary/40 border-2 border-background flex items-center justify-center text-[10px] font-bold text-primary">M</div>
            </div>
            <span className="text-sm font-semibold text-primary">Trusted by 200+ Universities Worldwide</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div> */}

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mt-12 mb-6 text-foreground animate-fade-in text-balance" style={{
          animationDelay: '0.1s'
        }}>
            AI-Powered Grading
            <span className="block mt-2">
              That <span className="text-primary">Understands</span> Learning
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in text-balance" style={{
          animationDelay: '0.2s'
        }}>
            Save 80% of grading time while providing students with detailed, personalized feedback. Built for educators who believe in the power of meaningful assessment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button variant="accent" size="xl" className="w-full sm:w-auto"  onClick={() => window.open('https://outlook.office.com/book/MarkingLab@markinglab.com', '_blank')}>
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            {/* <Button variant="outline" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch Demo
            </Button> */}
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Rubrics Driven
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              FIPPA and PIPEDA Compliant
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Instructor in Control
            </div>
          </div>
        </div>

        {/* Hero Video - MarkingLab Demo */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-3xl" />

            {/* Demo Video */}
            <div className="relative bg-card rounded-2xl border border-border p-2 shadow-strong">
              <div className="bg-background rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-xl"
                  src="/videos/markinglab-demo.mp4"
                  muted
                  loop
                  controls
                  playsInline
                  preload="auto"
                  poster="/placeholder.svg"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;