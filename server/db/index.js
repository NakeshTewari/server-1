import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Mongodb connected!! Db Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection Failed", error);
    process.exit(1);
  }
};
export { connectDB };

//password : FEPjnJWI15zcjyJA
