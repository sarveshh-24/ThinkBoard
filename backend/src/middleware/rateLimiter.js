import ratelimit from "../config/upstash.js";

const rateLimiter = async(req , res, next) =>{
    try {
        const {success} = await ratelimit.limit("my-limit-key");
        // that variable success should be in curly braces because it is an entire object not just a variable

        if(!success){
            return res.status(429).json({
                message : "Too many requests, try again later",
            });
        }

        next();
    } catch (error) {
        console.log("Rate kimit error ", error);
        next(error);
    }
}
export default rateLimiter;