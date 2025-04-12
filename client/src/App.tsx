import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/sonner.tsx";
import Index from "./components/Index.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import OtpLogin from "./pages/OtpLogin.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ResumeDetails from "./components/ResumeDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import VerfiyEmailPopUp from "./pages/VerifyEmailPopUp.tsx";


const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Index /> 
  },
  { 
    path: "/login", 
    element: <Login /> 
  },
  { 
    path: "/signup", 
    element: <Signup /> 
  },
  { 
    path: "/otp-login", 
    element: <OtpLogin /> 
  },
  { 
    path: "/verify-otp",  
    element: <VerifyEmail /> 
  },
  { 
    path: "/forgot-password", 
    element: <ForgotPassword /> 
  },
  { 
    path: "/reset-password", 
    element: <ResetPassword /> 
  },
  { 
    path: "/resume-analysis", 
    element: <ResumeDetails /> 
  },
  {
    path: '/verfiyEmailPopUp',
    element: <VerfiyEmailPopUp />
  },
  { 
    path: "*", 
    element: <NotFound /> 
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
