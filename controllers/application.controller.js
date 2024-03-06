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

    
    export const approveApplication = async (req, res) => {
        try {
            const sponsor_id = req.body.sponsor_id; 
    
           const applications = await applicationModel.updateMany({ sponsor_id: sponsor_id }, { status: 'approved' });
    
            if (applications.nModified === 0) {
                return res.status(404).send({ message: "No applications found for the specified sponsor" });
            }
    
            return res.status(200).send({ message: "Applications approved successfully" });
    
        } catch (error) {
            console.error(error);
            return res.status(500).send({ message: "Internal server error" });
        }
    }
    