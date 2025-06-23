import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv"

// allow access to environment variables
dotenv.config()

// create rate limiter that allows 100 reqs per 1 min
const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"60 s")
})

export default rateLimit