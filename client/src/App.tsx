import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Toaster } from "./components/ui/sonner.tsx";
import Loader from "./components/Loader";

const Index = lazy(() => import("./components/Index"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Signup = lazy(() => import("./pages/Signup.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const OtpLogin = lazy(() => import("./pages/OtpLogin.tsx"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail.tsx"));
const ResetPassword = lazy(() => import("./pages/ResetPassword.tsx"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword.tsx"));
const ResumeDetails = lazy(() => import("./components/ResumeDetails.tsx"));

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
    path: "*", 
    element: <NotFound /> 
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
