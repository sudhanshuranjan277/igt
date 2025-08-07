import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProgramOverview from "@/components/ProgramOverview";
import Experts from "@/components/Experts";
import TopicsAndCareers from "@/components/TopicsAndCareers";
import TakeAways from "@/components/TakeAways";
import Syllabus from "@/components/Syllabus";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="program">
        <ProgramOverview />
        <TopicsAndCareers />
        <TakeAways />
      </div>
      
      <div id="syllabus">
        <Syllabus />
      </div>
      
      <div id="experts">
        <Experts />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
