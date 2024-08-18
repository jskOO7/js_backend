import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInst = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB has successfully connected!! at host: ${connectionInst.connection.host}`
    );
  } catch (error) {
    console.log("Faild to connect data_base", error);
    process.exit(1);
  }
};

export default connectDB;
