import { Card, CardContent } from "@/components/ui/card";

interface Expert {
  name: string;
  title: string;
  company: string;
  description: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Mr Manas Khare",
    title: "AR/VR Engineer",
    company: "Google Inc",
    description: "Highly skilled AR/VR hardware expert with extensive experience in designing and developing immersive reality experiences. Proficient in working with various VR headsets, including Oculus, HTC Vive, and Meta Quest, with expertise in 3D modeling, spatial audio, and advanced video encoding and streaming algorithms. Strong background in integrating hardware and software components to create seamless AR/VR systems.",
    image: "/lovable-uploads/d15df5c1-5f69-46f4-9e82-334523be6517.png"
  },
  {
    name: "Mr Sridhar",
    title: "Founder & CEO, XR developer",
    company: "Intrino Robotics & Technologies Pvt Ltd",
    description: "Experienced XR Developer with 5+ years of expertise in designing and developing immersive augmented reality (AR) and virtual reality (VR) experiences. Proficient in Unity, C#, and 3D modeling, with a strong portfolio of projects showcasing innovative XR solutions. Skilled in optimizing XR applications for various platforms, including mobile, PC, and head-mounted displays.",
    image: "/lovable-uploads/8890a0f9-4c33-4839-91ce-b23e55933fb6.png"
  },
  {
    name: "Mr. Stalin Mani",
    title: "Principal XR Architect",
    company: "Intrino Technologies",
    description: "Award-winning 3D animation and visual effects professional with 14 years of experience. Recognized as an International Animation Award winner in 2009 and Unreal Engine Authorized Instructor. Proven track record of working with top institutions like MAAC, ZICA, Arena Animation, RAMP Animations, and iSquare Media. Delivers high-quality projects that captivate global audiences.",
    image: "/lovable-uploads/6a288f03-bff6-40a7-8ab0-2d80bfe3a971.png"
  },
  {
    name: "Mr. Premkumar",
    title: "Senior XR Developer",
    company: "Intrino Technologies",
    description: "With over 10 years of experience in AR & VR development, deployment, and strategy implementation, this expert has a proven track record of delivering innovative solutions. As a former Senior Specialist AR VR MR at Ford, they have leveraged their expertise to drive business growth and enhance customer experiences through immersive technologies. Their extensive background in AR & VR enables them to develop and implement effective strategies that meet the needs of diverse industries and applications.",
    image: "/lovable-uploads/bb1938ab-192a-4081-90f0-72225a5ab773.png"
  },
  {
    name: "Dr Meena Kannan",
    title: "AR/VR Developer, Ass Prof",
    company: "KCT",
    description: "With 7 years of academic experience in AR/VR development, I've honed my skills in creating immersive experiences using Unity, Unreal Engine, and other cutting-edge tools. My expertise spans AR/VR application development, 3D modeling, and interactive storytelling. I'm passionate about pushing the boundaries of what's possible in AR/VR.",
    image: "/lovable-uploads/a6f7740d-b36a-4bbd-98bc-6952c2ec573e.png"
  },
  {
    name: "Mr. Balaji",
    title: "XR Developer",
    company: "Intrino Technologies",
    description: "As an AR Specialist & Product Builder with 6 years of experience, I excel in spatial modeling and integration, crafting innovative AR solutions that transform user experiences. My expertise spans AR development, 3D modeling, and seamless integration of digital and physical worlds. I'm dedicated to creating immersive and interactive experiences that drive engagement and growth.",
    image: "/lovable-uploads/ce1ac961-286e-4b8c-8249-cc59f008997d.png"
  },
  {
    name: "Mr Alekh Johari",
    title: "FOUNDER",
    company: "ANEMOI SOLUTION",
    description: "He has been at the forefront of Metaverse/Virtual Reality and Augmented Reality innovation in the broadcast industry since 2007. With over 15 years of experience, they've developed cutting-edge solutions that push the boundaries of storytelling and audience engagement. Their expertise has shaped the future of immersive media, driving creative and technical excellence.",
    image: "/lovable-uploads/253ff3f1-c6ce-464f-bff3-98922aa950b3.png"
  },
  {
    name: "Dr Veera Talukdar",
    title: "AI Solutions Architect for AR/VR",
    company: "PDF, IIT Bombay",
    description: "As an AI Solutions Architect for AR/VR, she has designed and implemented cutting-edge AI-powered solutions that transform immersive experiences. With expertise in AR/VR development and AI/ML integration, they craft innovative applications that revolutionize industries. Their work enables seamless interactions between humans and technology, pushing the boundaries of what's possible in augmented and virtual reality.",
    image: "/lovable-uploads/a3e46b7b-b8ab-4809-96e8-aeb66e0604a5.png"
  },
  {
    name: "Dr Mangal Raj",
    title: "Expert Extended reality",
    company: "PhD from IIIT",
    description: "I specialize in harnessing the power of Extended Reality (XR) to revolutionize industries and experiences. With expertise in AR, VR, and MR technologies, I design and develop innovative solutions that blur the lines between physical and digital worlds. My work unlocks new possibilities for engagement, education, and entertainment, shaping the future of human interaction through immersive XR experiences.",
    image: "/lovable-uploads/508731e2-626a-4add-a79a-b72c80dc88c1.png"
  }
];

const Experts = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 inline-block">
            <h2 className="text-3xl font-bold text-foreground">OUR EXPERTS</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex-shrink-0 overflow-hidden">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium mb-2 inline-block">
                      {expert.name}
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{expert.title}</h3>
                    <p className="text-sm text-muted-foreground">{expert.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {expert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;