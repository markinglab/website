import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        isScrolled
          ? "border-b border-border/50"
          : "border-b border-border/20 shadow-soft mb-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="MarkingLab logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            {/* <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a> */}
          </nav>

          {/* Desktop CTA */}
          <div className="md:flex items-center gap-4">
              {/* <Button variant="ghost">Sign In</Button> */}
              <Button variant="accent" onClick={() => window.open('mailto:taranjot@markinglab.com', '_blank') }>
                  <Mail className="w-5 h-5"/>
                  Contact Us
                </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                How It Works
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Contact
              </a>
              <div className="hidden flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">Sign In</Button>
                <Button variant="accent" className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
