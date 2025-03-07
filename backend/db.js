import mongoose from "mongoose";
import "dotenv"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_KEY)
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed". error)
    }
}

export default connect