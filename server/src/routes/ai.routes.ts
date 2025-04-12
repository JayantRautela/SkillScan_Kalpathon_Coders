import express, { Router } from "express";
import { analyzeResume } from "../controllers/ai.controller";
import { singleUpload } from "../middleware/multer.middleware";


const router = Router();

router.post('/analyse-resume', singleUpload,  analyzeResume as unknown as express.RequestHandler);

export default router;