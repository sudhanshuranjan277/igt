import programImage from "@/assets/program-overview.jpg";

const ProgramOverview = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 inline-block">
            <h2 className="text-2xl font-bold text-foreground">Program Overview</h2>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Master program in AR/VR is a comprehensive program designed to equip students with the skills and knowledge necessary to design, develop, and deploy cutting-edge applications for AR/VR platforms. This program combines theoretical foundations with practical skills, ensuring students are well-prepared for the industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <img 
                src={programImage} 
                alt="AR/VR Technology" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>

          {/* Course Structure */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">Course Structure</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Duration:</span>
                  <span className="text-muted-foreground ml-2">12 months</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Language:</span>
                  <span className="text-muted-foreground ml-2">English</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">In-classroom training:</span>
                  <span className="text-muted-foreground ml-2">( online & offline )</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Hands-on practice:</span>
                  <span className="text-muted-foreground ml-2">in essential skills like lighting, rendering, and optimization</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Opportunities:</span>
                  <span className="text-muted-foreground ml-2">to build a professional portfolio through project-based learning</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Internship opportunities:</span>
                  <span className="text-muted-foreground ml-2">for real-world exposure and networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;