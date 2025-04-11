import express, { Router } from "express";
import { analyzeResume } from "../controllers/ai.controller";
import { singleUpload } from "../middleware/multer.middleware";
import { isAuthenticated } from "../middleware/isAuthenticated";


const router = Router();

router.post('/analyse-resume', singleUpload, isAuthenticated  as unknown as express.RequestHandler, analyzeResume as unknown as express.RequestHandler);

export default router;