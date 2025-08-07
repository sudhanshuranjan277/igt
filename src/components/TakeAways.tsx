import { Award, Monitor, Briefcase, Building, Users, Lightbulb, BookOpen, Headphones, Wrench } from "lucide-react";

const TakeAways = () => {
  const takeaways = [
    {
      icon: Award,
      title: "EU Acc course completion certificate",
      description: "Get certified upon successful completion"
    },
    {
      icon: Monitor,
      title: "Live classes, flexible hours",
      description: "Recordings of classes provided"
    },
    {
      icon: Briefcase,
      title: "JOB ASSISTANCE",
      description: "Resume building & Mentoring support"
    },
    {
      icon: Building,
      title: "Industrial exposure and Internships",
      description: "Real-world experience opportunities"
    },
    {
      icon: Users,
      title: "Offline hands on exposure availability",
      description: "Practical learning experiences"
    },
    {
      icon: Lightbulb,
      title: "Hands on experiences on all aspects",
      description: "Comprehensive practical training"
    },
    {
      icon: Wrench,
      title: "Project and publication assistance",
      description: "Support for your research and projects"
    },
    {
      icon: BookOpen,
      title: "24/7 accessible study material",
      description: "Learn at your own pace anytime"
    },
    {
      icon: Headphones,
      title: "VR AR Technology Access",
      description: "Hands-on with latest equipment"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">TAKE AWAYS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {takeaways.map((item, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-glow-secondary group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TakeAways;