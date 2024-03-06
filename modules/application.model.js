import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    reason: {
      type: String,
      required: true,
    },
    money: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    link: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    sponsorId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const applicationModel = mongoose.model("Application", applicationSchema);
export default applicationModel;
