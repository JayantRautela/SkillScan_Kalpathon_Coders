import express, { Router } from "express";
import { forgotPassword, login, register, resetPassword, sendOtp, verifyEmail, verifyOtp } from "../controllers/user.controller";
import { singleUpload } from "../middleware/multer.middleware";

const router = Router();

router.post('/resigter', register as unknown as express.RequestHandler);
router.post('/verify-email/:userId', verifyEmail as unknown as express.RequestHandler);
router.post('/login', login as unknown as express.RequestHandler);
router.post('/sendOtp', sendOtp as unknown as express.RequestHandler);
router.post('/verifyOtp', verifyOtp as unknown as express.RequestHandler);
router.post('/forgot-password', forgotPassword as unknown as express.RequestHandler);
router.post('/reset-password', resetPassword as unknown as express.RequestHandler);

export default router;