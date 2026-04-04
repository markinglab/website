import { Button } from "@/components/ui/button";
import whiteLogo from "@/assets/logo-white.png";
import { ArrowRight, Mail } from "lucide-react";

const footerLinks = {
  // product: [
  //   { name: "Features", href: "#features" },
  //   { name: "Pricing", href: "#pricing" },
  //   { name: "Integrations", href: "#" },
  //   { name: "Changelog", href: "#" },
  // ],
  // resources: [
  //   { name: "Documentation", href: "#" },
  //   { name: "API Reference", href: "#" },
  //   { name: "Case Studies", href: "#" },
  //   { name: "Blog", href: "#" },
  // ],
  company: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ],
  // legal: [
  //   { name: "Privacy Policy", href: "#" },
  //   { name: "Terms of Service", href: "#" },
  //   { name: "FERPA Compliance", href: "#" },
  //   { name: "Security", href: "#" },
  // ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={whiteLogo} alt="MarkingLab Inc." className="h-12 w-auto" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              AI-powered grading and feedback for post-secondary education. Saving educators time while improving student outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Questions or want a walkthrough? Book a demo and we will show you MarkingLab in action.
            </p>
            <div className="mt-4">
              <Button 
                size="sm" 
                className="bg-white text-primary hover:scale-105 hover:shadow-medium hover:bg-white transition-transform duration-150 ease-out"
                 onClick={() => window.open('https://outlook.office.com/book/MarkingLab@markinglab.com', '_blank')}
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} MarkingLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:taranjot@markinglab.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              taranjot@markinglab.com
            </a>
            {/* <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
