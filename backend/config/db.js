

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error("MongoDB connection string is missing in environment variables");
        process.exit(1);
    }
    await mongoose.connect(uri).then(() => console.log("DB Connected")).catch((err) => {
        console.error("DB Connection Error:", err);
        process.exit(1);
    });
}
