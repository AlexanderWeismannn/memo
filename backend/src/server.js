import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

import noteRoutes from "./routes/noteRoutes.js"
import {connectDB} from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js"

// allows for access to environment variables
dotenv.config();
const PORT = process.env.PORT || 5001; // if undefined use port 5001
const __dirname = path.resolve()
const app = express();

if(process.env.NODE_ENV !== "production" ){
    app.use(
        cors({
            origin:"http://localhost:5173",
        })
    )
}

//express middleware, gets the JSON content as req.body
app.use(express.json())
// check if the user can send requests or if they are over budget
app.use(rateLimiter)
app.use("/api/notes",noteRoutes)

if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })

}

//connect to our mongoDB database, and then start the app 
connectDB().then(() => {
    // connect to nodejs server
    app.listen( PORT, () =>  { 
        console.log("Server started on PORT:", PORT);
    });
})



