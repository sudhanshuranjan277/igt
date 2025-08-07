import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, QrCode } from "lucide-react";
import qrCode from "@/assets/qr-code.png";

const Contact = () => {
  const handleContactClick = () => {
    window.open('tel:+918867394159', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@igteu.in', '_blank');
  };

  const handleQRClick = () => {
    alert('QR Code functionality - Please implement QR scanner or redirect to registration page');
  };

  return (
    <section id="contact" className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logos */}
            <div className="flex flex-col gap-4">
              <div className="bg-red-800 rounded-lg p-3 inline-block">
                <div className="text-yellow-400 font-bold text-xs text-center">INSTITUTE OF GLOBAL TECHNOLOGY</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-foreground mb-2">Organised by</p>
                <h2 className="text-2xl font-bold text-foreground mb-2 ">
                INSTITUTE OF GLOBAL TECHNOLOGY
                </h2>
                <h3 className="text-xl font-bold text-foreground">
                  AND INTRINO ROBOTICS & TECHNOLOGIES PVT LTD
                </h3>
              </div>

              <div className="text-center space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-foreground">Admission Fee</h4>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-foreground line-through opacity-60">
                      Rs 1,24,999
                    </div>
                    <div className="text-4xl font-bold text-primary">
                      @ Rs 89,999
                    </div>
                    <p className="text-muted-foreground">( EMI options available )</p>
                    <p className="text-sm text-accent">
                      As early bird offer Till August 15th 2025
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleContactClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-glow-primary transition-all duration-300 hover:scale-105"
              >
                Join Now 
              </Button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/20 backdrop-blur-sm border border-primary/20">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    CONTACT US FOR MORE INFORMATION :
                  </h3>
                </div>

                <div className="space-y-4">
                  <div 
                    onClick={handleContactClick}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-semibold text-foreground">+91 88673 94159</span>
                  </div>

                  <div 
                    onClick={handleEmailClick}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">MAIL US AT :</div>
                      <div className="text-lg font-semibold text-foreground">info@igteu.in</div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
