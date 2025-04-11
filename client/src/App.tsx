import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/Index";
import { Toaster } from './components/ui/sonner.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import NotFound from './pages/NotFound.tsx';
import OtpLogin from './pages/OtpLogin.tsx';
import VerifyEmail from './pages/VerifyEmail.tsx';
import ResetPassword from './pages/ResetPassword.tsx'
import ForgotPassword from "./pages/ForgotPassword.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/otp-login',
    element: <OtpLogin/>
  },
  {
    path: '/verify-otp',
    element: <VerifyEmail/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  )
}

export default App
