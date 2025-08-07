import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TopicsAndCareers = () => {
  const keyTopics = [
    "AR/VR Development: Learn to design and develop immersive AR/VR experiences",
    "3D Modeling and Animation: Understand industry-standard 3D software and techniques",
    "User Experience Design: Learn to create intuitive and engaging user experiences",
    "Programming: Gain skills in programming languages and game engines relevant to AR/VR",
    "Project Management: Understand how to plan and execute AR/VR projects"
  ];

  const careerOpportunities = [
    "Unreal Developer: Create immersive experiences using Unreal Engine",
    "XR Developer: Develop cross-platform experiences integrating VR, AR, and MR",
    "3D Modeler: Design assets for virtual environments",
    "UX Designer: Create intuitive and engaging user experiences",
    "Simulation Engineer: Design simulations for training and other applications"
  ];

  const skills = [
    "Proficiency in industry-standard 3D software and UI navigation",
    "Ability to design and develop immersive AR/VR experiences",
    "Understanding of AR/VR hardware and physical structure",
    "Knowledge of programming languages and game engines relevant to AR/VR",
    "Skills in project management and teamwork"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Topics */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="bg-foreground text-background px-6 py-3 rounded-2xl inline-block">
                <CardTitle className="text-xl font-bold">KEY TOPICS COVERED</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {keyTopics.map((topic, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{topic}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Career Opportunities */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="bg-foreground text-background px-6 py-3 rounded-2xl inline-block">
                <CardTitle className="text-xl font-bold">CAREER OPPORTUNITIES</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Graduates of this program can pursue various career paths, including:
              </p>
              {careerOpportunities.map((career, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{career}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="bg-foreground text-background px-6 py-3 rounded-2xl inline-block">
                <CardTitle className="text-xl font-bold">SKILLS YOU WILL GAIN</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{skill}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TopicsAndCareers;