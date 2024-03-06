import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "rawani1234",
  api_key: process.env.CLOUDINARY_API_KEY || "535136936882345",
  api_secret: process.env.CLOUDINARY_API_SECRET || "TAqeBdhi2uWIkbeUknAc-d7O8RE",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    console.log(localFilePath);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("me call ho raha hu", response);
    // fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // fs.unlinkSync(localFilePath);
    console.log("me cal hua", error.message)
    return null;
  }
};

export default uploadOnCloudinary;
