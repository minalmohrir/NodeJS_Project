import mongoose from "mongoose";

const connectDB = async () => { // function to connect to the database
  try {
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect
    (`${process.env.MONGODB_URI}`) 
    console.log(`\n MongoDB connected!!!
         ${connectionInstance.connection.host} \n`);



  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1); // exit the process with failure

  }
}

export default connectDB;
