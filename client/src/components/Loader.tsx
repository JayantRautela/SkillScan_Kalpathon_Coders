import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#0f0f0f]">
      <Loader2 className="h-12 w-12 animate-spin text-white" />
    </div>
  );
};

export default Loader;
