import { Request, Response } from 'express';
import pdfParse from 'pdf-parse';
import axios from 'axios';
import cloudinary from '../config/cloudinary.config';
import getDataUri from '../utils/getDataUri';

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_KEY!;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent';


export const analyzeResume = async (req: Request, res: Response) => {
    const file = req.file;
    console.log(file);

    if (!file) {
        return res.status(400).json({ 
            message: 'No file uploaded, A File must be uploaded' ,
            success: false,
        });
    }

    try {
        const dataUri = getDataUri(file);

        const cloudinaryResult = await cloudinary.uploader.upload(dataUri.content!, {
        resource_type: 'raw',
        folder: 'resumes',
        });

        console.log('File Uploaded to Cloudinary:', cloudinaryResult.secure_url);

        const pdfData = await pdfParse(file.buffer);
        console.log(pdfData);
        const resumeText = pdfData.text;
        console.log(resumeText);

        const prompt = `
            You are an expert resume analyst.

            Given the following resume:
            """
            ${resumeText}
            """

            Analyze and return:
            - 3 strengths of the candidate
            - 3 weaknesses or missing elements
            - Skills the candidate should learn
            - A 2–3 line summary of job-fit potential
            - 3 learning resources (with short descriptions and direct links to relevant courses)

            Respond in this JSON format:
            {
                "strengths": [],
                "weaknesses": [],
                "suggestedSkills": [],
                "jobFitSummary": "",
                "learningResources": [
                    {
                    "title": "",
                    "description": "",
                    "url": ""
                    }
                ]
            }`;

        const geminiRes: any = await axios.post(
        `${GEMINI_URL}?key=${GEMINI_API_KEY}`,
        {
            contents: [
            {
                parts: [{ text: prompt }],
            },
            ],
        }
        );
        console.log(geminiRes);


        const content = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text;
        const cleaned = content.replace(/```json|```/g, '').trim();
        if (!content) {
            return res.status(400).json({
                message: "Invalid response from AI"
            })
        }

        const parsed = JSON.parse(cleaned);
        console.log("------ Response original -------")
        console.log(parsed);

        res.status(200).json({
            message: "Resume analyzed !!",
            success: true,
            cloudinaryUrl: cloudinaryResult.secure_url,
            analysis: parsed,
        });
    } catch (error: any) {
        console.log(`Error: ${error}`);
        return res.status(500).json({
            message: "Internal Server error",
            error: error.message,
            success: false
        });
    }
}
