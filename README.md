# 🧠 Resume Analyzer – AI-powered Resume Evaluation Tool

Resume Analyzer is a full-stack AI-powered application that helps job seekers optimize their resumes by parsing PDF resumes, comparing them to job descriptions, identifying skill gaps, providing improvement suggestions using GPT, and generating ATS (Applicant Tracking System) scores.

## ✨ Features

- 📄 Upload and parse resumes (PDF)
- 🧾 Job description comparison
- 🧠 AI-powered insights and suggestions (via GOOGLE GEMINI/GPT)
- 📚 Personalized learning paths for missing skills
- 💾 Local storage for session persistence
- 🔁 Resume history and detail view

---

## 🧱 Tech Stack

### Frontend
- React + TypeScript
- React Router for navigation
- TailwindCSS for styling
- Axios for API calls

### Backend
- Node.js + Express
- TypeScript
- Multer for file uploads
- PDF parsing via `pdf-parse`
- GOOGLE GEMINI API for resume analysis
- Custom in-memory rate limiter



## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm 
- GOOGLE GEMINI API Key

### Backend Setup

```bash
cd server
npm install
# Create a .env file with your OPENAI_API_KEY
npm run dev

```bash
cd cliemt
npm install
npm run dev
