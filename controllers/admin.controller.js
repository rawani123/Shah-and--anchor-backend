import sponsorModel from "../modules/sponsorSchema.js";
import userModel from "../modules/user.model.js";

export const approvingApplication = async (req, res) => {
    try{
        const {sponsorId,status} = req.body;
        const sponsor = await sponsorModel.findByIdAndUpdate(sponsorId,{status},{new:true});
        const id = sponsor.sponsor_id;
        console.log(id)
        const user = await userModel.findById({_id:id});
        const notification = user.notifications;
        notification.push({
            message:`Your application has been ${status}`,
        });
        if(sponsor.status==="approved"){
            await userModel.findByIdAndUpdate({_id:user._id},{isSponsor:true},{new:true});
        }
        await user.save();
        return res.status(200).send({
            success:true,
            message:"Application approved successfully",
            sponsor
        });
    }catch(error){
        return res.status(500).send({
            success:false,
            message:`Error in approvingApplication ${error.message}`
        });
    }
}