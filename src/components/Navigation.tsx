import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ApplicationForm from "./ApplicationForm";
import igtLogo from "@/assets/igt-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Program", id: "program" },
    { label: "Syllabus", id: "syllabus" },
    { label: "Experts", id: "experts" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/44c19669-7f24-4818-8b4e-03bd6869535a.png" 
              alt="Institute of Global Technology" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-lg font-bold text-foreground">IGT</div>
              <div className="text-xs text-muted-foreground">Institute of Global Technology</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="transition-colors font-medium text-foreground hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => setIsApplicationFormOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left px-4 py-2 transition-colors text-foreground hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  onClick={() => setIsApplicationFormOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <ApplicationForm 
        isOpen={isApplicationFormOpen} 
        onClose={() => setIsApplicationFormOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;