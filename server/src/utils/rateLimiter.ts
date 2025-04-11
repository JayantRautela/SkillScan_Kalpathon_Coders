import { Request, Response, NextFunction } from 'express';

interface RateLimitRecord {
    count: number;
    timestamp: number;
}

const rateLimitWindow = 15 * 60 * 1000; 
const maxRequests = 100;

const requestLogs: { [ip: string]: RateLimitRecord } = {};

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
    const ip = (req.ip || 'unknown') as string;
    const now = Date.now();

    if (!requestLogs[ip]) {
        requestLogs[ip] = { count: 1, timestamp: now };
        return next();
    }

    const record = requestLogs[ip];

    if (now - record.timestamp > rateLimitWindow) {

        requestLogs[ip] = { count: 1, timestamp: now };
        return next();
    }

    if (record.count >= maxRequests) {
        return res.status(429).json({ 
            error: 'Too many requests. Please try again later.'
        });
    }

    requestLogs[ip].count++;
    next();
};

export default rateLimiter;
