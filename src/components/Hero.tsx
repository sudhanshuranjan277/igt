import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-vr.jpg";
import igtLogo from "@/assets/igt-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-accent/50 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Logos */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-red-800 rounded-lg p-3">
                <div className="text-yellow-400 font-bold text-xs">INSTITUTE OF GLOBAL TECHNOLOGY</div>
              </div>
              
              <div className="mt-8 p-4 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-xl">
                <div className="flex items-center gap-4">
                  <img 
                    src="/lovable-uploads/44c19669-7f24-4818-8b4e-03bd6869535a.png" 
                    alt="Institute of Global Technology" 
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <div className="text-xl font-bold bg-cyber-gradient bg-clip-text text-transparent">
                      IGT INTRINO
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-cyber-gradient bg-clip-text text-transparent">
                  EU ACC MASTER PROGRAM
                </span>
                <br />
                <span className="text-foreground">
                  AR VR TECHNOLOGY
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-primary font-semibold">
                  Starts from Sep 2025
                </p>
                <p className="text-lg text-muted-foreground">
                  ( ONLINE & OFFLINE )
                </p>
              </div>

              <div className="bg-card/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6">
                <p className="text-lg text-foreground mb-4">
                  "Learn from experts of Google, IITs and top industrial"
                </p>
              </div>

              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                JOIN US TODAY!
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
            <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">International and National experts</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Industrial partners</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Students trained</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Hands on Projects</div>
              </div>
              <div className="text-center space-y-2 col-span-2 xl:col-span-1">
                <div className="text-3xl font-bold text-primary">35+</div>
                <div className="text-sm text-muted-foreground">Practical use cases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;