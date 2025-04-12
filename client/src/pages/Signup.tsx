import SignUpForm  from "../components/SignUpForm";

const Signup = () => {
  
  return (
    <main className="h-screen flex items-center justify-center bg-[#f5f2e8]">
      <SignUpForm />
      <div className="h-screen w-[50%] h-screen flex items-center justify-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Transform Your Resume. Elevate Your Career
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get expert analysis, personalized <br /> recommendations, and career path <br /> guidance to help you land your dream job.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Signup
