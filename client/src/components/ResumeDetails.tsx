import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { useLocation } from "react-router-dom";

interface ResumeAnalysis {
  strengths: string[];
  weaknesses: string[];
  suggestedSkills: string[];
  jobFitSummary: string;
  learningResources: string[];
}

const defaultAnalysis: ResumeAnalysis = {
  strengths: [],
  weaknesses: [],
  suggestedSkills: [],
  jobFitSummary: "",
  learningResources: []
};

const ResumeDetails = () => {
  const location = useLocation();
  const [analysis, setAnalysis] = useState<ResumeAnalysis>(defaultAnalysis);

  useEffect(() => {
    const stateAnalysis = location.state?.analysis;
    const stored = localStorage.getItem("resumeAnalysis");

    if (stateAnalysis) {
      setAnalysis(stateAnalysis);
      localStorage.setItem("resumeAnalysis", JSON.stringify(stateAnalysis));
    } else if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAnalysis(parsed);
      } catch (e) {
        console.error("Failed to parse local storage", e);
      }
    }
  }, [location.state]);

  const renderList = (title: string, items?: string[]) => (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {items && items.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No data available</p>
      )}
    </div>
  );

  const radarData = [
    { subject: "Strengths", value: analysis.strengths.length },
    { subject: "Weaknesses", value: analysis.weaknesses.length },
    { subject: "Skills", value: analysis.suggestedSkills.length },
    { subject: "Resources", value: analysis.learningResources.length }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Resume Analysis Report</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {renderList("Strengths", analysis.strengths)}
          {renderList("Weaknesses", analysis.weaknesses)}
          {renderList("Suggested Skills", analysis.suggestedSkills)}
          {renderList("Learning Resources", analysis.learningResources)}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resume Insight Radar</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 10]} />
              <Radar name="Metrics" dataKey="value" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Job Fit Summary</h3>
        <p className="text-gray-700">{analysis.jobFitSummary || "No summary available."}</p>
      </div>
    </div>
  );
};

export default ResumeDetails;
