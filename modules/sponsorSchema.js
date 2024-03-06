import mongoose, { Schema } from "mongoose"

const sponsorSchema=new mongoose.Schema({
    sponsor_id: {
        type: String,
        required: true
      },
      name: {
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
      contact_person: {
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
    },{timestamps:true});

    
    const sponsorModel= mongoose.model("Sponsor",sponsorSchema);

    module.exports = sponsorSchema;