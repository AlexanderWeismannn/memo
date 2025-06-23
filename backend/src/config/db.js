import mongoose from "mongoose"
export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection Established with MongoDB")

    }catch(error){
        console.error("Failed To Connect",error)
        process.exit(1) // bad exit
    }
}