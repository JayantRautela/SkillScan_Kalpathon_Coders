
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="text-lg font-semibold">SkillScan</a>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm text-gray-700 hover:text-blue-600">Resume Analysis</a>
        <a href="#" className="text-sm text-gray-700 hover:text-blue-600">Learning Path</a>
        <div className="relative group">
          <button className="flex items-center text-sm text-gray-700 hover:text-blue-600">
            Success Stories
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center text-sm text-gray-700 hover:text-blue-600">
            Resources
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div>
        <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;