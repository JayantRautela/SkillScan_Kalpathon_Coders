
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center bg-gray-50">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">
          Unlock Your Career Potential
        </h2>
        <p className="text-gray-600 mb-6">
          Ready to take your career to the next level? Submit your resume for a free analysis and discover personalized improvement strategies tailored just for you.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          Get Started
        </Button>
      </div>
      
      <div className="w-full md:w-1/2">
        <img 
          src="/lovable-uploads/21fa0b82-173e-4abe-9bc2-2b8d0198d01a.png" 
          alt="Resume analysis tool" 
          className="w-full rounded-lg bg-gray-200"
        />
      </div>
    </div>
  );
};

export default CTA;