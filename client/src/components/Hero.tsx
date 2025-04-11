
import { useState } from "react";
import { Button } from "./ui/button";
import { Upload } from "lucide-react";
import UploadResume from "./UploadResume";


const Hero = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Transform Your Resume. Elevate Your Career
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Get expert analysis, personalized <br /> recommendations, and career path <br /> guidance to help you land your dream job.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center cursor-pointer" onClick={() => setOpen(true)}>
          <Upload className="mr-2 h-4 w-4" />
          Upload Resume
        </Button>
        <UploadResume 
          open={open}
          onOpenChange={setOpen}
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <img 
          src="/lovable-uploads/21fa0b82-173e-4abe-9bc2-2b8d0198d01a.png" 
          alt="Resume analysis preview" 
          className="w-full rounded-lg bg-gray-200"
        />
      </div>
    </div>
  );
};

export default Hero;
