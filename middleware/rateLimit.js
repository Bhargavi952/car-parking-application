import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
    windowMs: 10000, //10 seconds
    max: 10,
    message: "You have exceeded the 10 requests in 10 seconds limit!",
    headers: true,
  });

  export default rateLimiter