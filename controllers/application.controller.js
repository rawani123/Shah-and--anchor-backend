import applicationModel from "../modules/application.model.js";

export const applicationController = async (req, res) => {
    try {
      const {
        reason,
        location,
        money
      } = req.body;
      if (!reason ||
          !location ||
          !money) { 
        return res.status(400).send({ message: "Please fill in all fields" });
      }
  
      const newApplication = new applicationModel({
        reason,
        location,
        money
    });
    await newApplication.save();

           return res.status(200).send({ message: "Application saved successfully" });

        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: "Internal server error" });
        }
    }