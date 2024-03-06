import applicationModel from "../modules/application.model.js";
import sponsorModel from "../modules/sponsor.model.js";
import uploadOnCloudinary from "../utils/cloudnary.js";

export const applicationController = async (req, res) => {
  try {
    const { reason, location, money, link, userId, sponsorId } = req.body;

    console.log("me he hu", reason);
    if (!reason || !location || !money || !link || !userId || !sponsorId) {
      return res.status(400).send({ message: "Please fill in all fields" });
    }

    const newApplication = new applicationModel({
      reason,
      location,
      money,
      link,
      userId,
      sponsorId,
    });
    await newApplication.save();

    const sponsor = await sponsorModel.findById({ _id: sponsorId });
    const sponsorUser = await userModel.findById({ _id: sponsor.userId });
    sponsorUser.notifications.push({
      type: "application",
      user: userId,
      message: `You have a new application `,
    });
    await sponsorUser.save();

    const user = await userModel.findById({ _id: userId });
    user.notifications.push({
      type: "application",
      user: sponsorId,
      message: `You have a been applied for sponsorship`,
    });
    user.applications.push({
        applicationId:newApplication._id,
        sponsorId,
        message:`Applied for sponsorShip from ${sponsorUser.userName} for ${reason} at ${location} with ${money} `
    });
    await user.save();

    return res.status(200).send({ message: "Application saved successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const approveApplication = async (req, res) => {
  try {
    const {  } = req.body;

  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
