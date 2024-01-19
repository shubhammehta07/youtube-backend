import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 
// here connect database in another folder/file and import this utlis/index.js file.
// becouse is easy to read and this is also a professional approch to connect database.


const connectDB = async () => {
  try {
   const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // here [DB_NAME] is database name
   console.log(`\n MOngoDB connected  !! DB : HOST : ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("MONGODB CONNECTION FAILED :-", error);
    process.exit(1);
  }
};

export default connectDB;