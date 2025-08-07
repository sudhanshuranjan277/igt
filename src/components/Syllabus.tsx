import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Syllabus = () => {
  const firstSemester = [
    {
      title: "Introduction to AR/VR (4 credits)",
      items: [
        "Overview of AR/VR technologies",
        "History and evolution of AR/VR",
        "Current trends and applications"
      ]
    },
    {
      title: "3D Modeling and Animation (4 credits)",
      items: [
        "Fundamentals of 3D modeling",
        "Industry-standard 3D software (e.g., Blender)",
        "Animation techniques and principles"
      ]
    },
    {
      title: "Programming for AR/VR (4 credits)",
      items: [
        "Introduction to programming languages (e.g., C#, Java, Python)",
        "Game engines (e.g., Unity, Unreal Engine)",
        "AR/VR development frameworks and tools"
      ]
    },
    {
      title: "User Experience Design (4 credits)",
      items: [
        "Principles of UX design",
        "Designing intuitive and engaging user experiences",
        "Human-centered design approach"
      ]
    },
    {
      title: "AR/VR Development Fundamentals (4 credits)",
      items: [
        "Designing and developing immersive AR/VR experiences",
        "Understanding AR/VR hardware and physical structure"
      ]
    }
  ];

  const secondSemester = [
    {
      title: "Advanced AR/VR Development (4 credits)",
      items: [
        "Advanced techniques for AR/VR development",
        "Integration with AI, ML, and other technologies",
        "Optimization and performance enhancement"
      ]
    },
    {
      title: "Project Management and Teamwork (4 credits)",
      items: [
        "Principles of project management",
        "Agile development methodologies",
        "Teamwork and collaboration in AR/VR development"
      ]
    },
    {
      title: "Specialized AR/VR Topics (4 credits)",
      items: [
        "Advanced 3D modeling and animation techniques",
        "AR/VR for specific industries (e.g., healthcare, education)",
        "Emerging trends and technologies in AR/VR"
      ]
    },
    {
      title: "Capstone Project (8 credits)",
      items: [
        "Development of a comprehensive AR/VR project",
        "Application of skills and knowledge gained throughout the program",
        "Portfolio development and presentation"
      ]
    },
    {
      title: "Internship and Industry Exposure (4 credits)",
      items: [
        "Real-world experience in AR/VR development",
        "Networking opportunities with industry professionals",
        "Application of theoretical knowledge in practical settings"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 inline-block">
            <h2 className="text-3xl font-bold text-foreground">SYLLABUS OVERVIEW</h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* First Semester */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="bg-foreground text-background px-6 py-3 rounded-2xl inline-block">
                <CardTitle className="text-xl font-bold">FIRST SEMESTER</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">Semester 1: Foundations of AR/VR</h3>
              </div>
              {firstSemester.map((course, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-primary">{course.title}</h4>
                  <ul className="space-y-1 ml-4">
                    {course.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Second Semester */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="bg-foreground text-background px-6 py-3 rounded-2xl inline-block">
                <CardTitle className="text-xl font-bold">SECOND SEMESTER</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-foreground">Semester 2: Advanced AR/VR Development</h3>
              </div>
              {secondSemester.map((course, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-semibold text-primary">{course.title}</h4>
                  <ul className="space-y-1 ml-4">
                    {course.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;