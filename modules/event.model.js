import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      required:true
    },
  },
  { timestamps: true }
);

const eventModel = mongoose.model("Event", eventSchema);
export default eventModel;
