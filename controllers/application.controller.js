import applicationModel from "../modules/application.model.js";
import sponsorModel from "../modules/sponsor.model.js";
import userModel from "../modules/user.model.js";
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
    console.log(sponsor)
    const id = sponsor.sponsor_id;
    const sponsorUser = await userModel.findById({ _id: id });
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
      applicationId: newApplication._id,
      sponsorId,
      message: `Applied for sponsorShip from ${sponsorUser.userName} for ${reason} at ${location} with ${money} `
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
    const { userId } = req.body;


  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const getAllAplllications = async (req, res) => {
  try {
    const { sponsorId } = req.body;
    // console.log(sponsorId); 
    const applications = await applicationModel.find({ userId: sponsorId });
    console.log("application data",applications);
    console.log(applications.userId)
    const user = await userModel.findById({ _id: sponsorId })
    console.log(user)
    return res.status(200).send({ message: "All applications", success: true, applications,user });
  }
  catch (error) {
    return res.status(500).send({ message: error.message });
  }
}
