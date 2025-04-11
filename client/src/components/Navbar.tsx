import { Button } from "./ui/button";
import { ChevronDown, LogOut, User2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/authSlice";
import { RootState } from "../redux/store";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import axios from "axios";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store: RootState) => store.auth) as unknown as {
    user: { fullname: string; profilepicture?: string };
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res: any = await axios.get(`http://localhost:3333/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast(error.response.data.message);
    }
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="text-lg font-semibold">
          SkillScan
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
          Resume Analysis
        </a>
        <a href="#" className="text-sm text-gray-700 hover:text-blue-600">
          Learning Path
        </a>
        <div className="relative group">
          <button className="flex items-center text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
            Success Stories
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="relative group">
          <button className="flex items-center text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
            Resources
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
      {!user ? (
        <div className="flex items-center gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer" onClick={() => navigate('/login')}>Login</Button>
          <Button variant="outline" className="cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="user?.profilepicture" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex gap-4 space-y-2">
              <Avatar>
                <AvatarImage src="user?.profile?.profilePhoto" />
              </Avatar>
              <div>
                <h4 className="font-medium">{user?.fullname}</h4>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-grey-600">
              <>
                {
                  <>
                    <User2 />
                    <Button variant="link">
                      <Link to="/profile">View Profile</Link>
                    </Button>
                  </>
                }
              </>
              <div className="flex w-fit items-center gap -2 cursor-pointer">
                <LogOut />
                <Button onClick={logoutHandler} variant="link">
                  Logout
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </nav>
  );
};

export default Navbar;
