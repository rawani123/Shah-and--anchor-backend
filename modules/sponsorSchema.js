import mongoose, { Schema } from "mongoose"

const sponsorSchema=new mongoose.Schema({
    sponsor_id: {
        type: String,
        required: true
      },
      
      industry: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      
      contact_email: {
        type: String,
        required: true
      },
      contact_phone: {
        type: String,
        required: true
      },
      budget:{
        type: String,
        required: true
      },
      location:{
        type: String,
        required: true
      },
      video:{
        type: String,
      },
      photo:{
        type: String,
      }
    },{timestamps:true});

    
const sponsorModel= mongoose.model("Sponsor",sponsorSchema);
export default sponsorModel;