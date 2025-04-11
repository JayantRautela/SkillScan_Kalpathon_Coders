import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/user.route";
import AIRoute from "./routes/ai.routes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/ai', AIRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});