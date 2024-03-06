import mongoose, { connect } from "mongoose";

const connectDB =()=>{
   try {
     const conn = connect(process.env.MONGO_URI)
     console.log("Connected to Mongo")
   } catch (error) {
    console.log("Error in Mongo",error)
   }
}

export default connectDB;