
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ title, description, action }: { title: string; description: string; action: string }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="w-20 h-20 mb-4 flex items-center justify-center bg-gray-200 rounded-lg">
        <img src="/placeholder.svg" alt="Feature icon" className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href="#" className="text-blue-600 text-sm font-medium flex items-center">
        {action} <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Unlock Your Career Potential with Our Comprehensive Resume Analysis Features
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Personalized Suggestions to Elevate Your Resume and Career Journey"
          description="Our advanced tools analyze your resume to highlight strengths and areas for improvement."
          action="Learn More"
        />
        
        <FeatureCard 
          title="Tailored Learning Paths Designed to Match Your Career Aspirations"
          description="Receive curated learning recommendations that will advance you in your chosen goals."
          action="Sign Up"
        />
        
        <FeatureCard 
          title="Transform Your Resume with Actionable Insights and Expert Guidance"
          description="Get extensive feedback from AI paired with human experts to receive a polished result."
          action="Get Started"
        />
      </div>
    </div>
  );
};

export default Features;