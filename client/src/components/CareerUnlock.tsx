
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CareerUnlock = () => {
  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <p className="text-blue-600 font-medium text-sm mb-2">Benefits</p>
        <h2 className="text-3xl font-bold mb-4">
          Unlock Your Career Potential with Our Service
        </h2>
        <p className="text-gray-600 mb-6">
          Transform your career journey with personalized insights tailored to your unique skills and goals. Our service empowers you to identify areas for improvement and provides a clear path for skill enhancement.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Explore
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <img 
          src="/lovable-uploads/21fa0b82-173e-4abe-9bc2-2b8d0198d01a.png" 
          alt="Career growth visualization" 
          className="w-full rounded-lg bg-gray-200"
        />
      </div>
    </div>
  );
};

export default CareerUnlock;