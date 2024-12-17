import rateLimit from 'express-rate-limit';

const createRateLimiter = (limit) =>
  rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: limit, // Max API calls per hour
    message: { success: false, message: 'Rate limit exceeded. Please upgrade your plan.' },
    standardHeaders: true, // Return rate limit info in headers
    legacyHeaders: false, // Disable `X-RateLimit-*` headers
  });

export default createRateLimiter;



