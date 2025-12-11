import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`\nMongoDb connected !! DB Host: ${connectInstance.connection.host}`);
  } catch (error) {
    console.log("Mogodb connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
