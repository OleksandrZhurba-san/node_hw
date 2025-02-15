import mongoose, { connect } from "mongoose";
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI;

export const connectDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(`Connection to DB ${connection.connection.host} has been established`);
  } catch (error) {
    console.log("Failed to connect to DB", error);
    process.exit(1);
  }
}
