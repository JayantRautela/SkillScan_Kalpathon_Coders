import React from "react";

const FeedbackStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="text-center px-4">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const AIFeedback = () => {
  return (
    <div className="w-full py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium text-sm mb-2">Improve</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Transform Your Resume with AI Feedback
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Submitting your resume is the first step toward a stronger career. Our platform provides
          personalized feedback to help you shine.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <FeedbackStep 
          icon={<span className="text-2xl">📄</span>}
          title="How to Submit Your Resume"
          description="Simply upload your resume to get started."
        />
        
        <FeedbackStep 
          icon={<span className="text-2xl">✨</span>}
          title="Receive Tailored Feedback Instantly"
          description="Our AI analyzes your resume and offers suggestions."
        />
        
        <FeedbackStep 
          icon={<span className="text-2xl">🚀</span>}
          title="Explore Your Personalized Learning Path"
          description="Get recommendations for skills or trainings you'll find helpful."
        />
      </div>
    </div>
  );
};

export default AIFeedback;