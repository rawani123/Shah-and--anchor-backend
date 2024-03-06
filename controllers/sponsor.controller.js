import sponsorModel from "../modules/sponsorSchema.js";

export const sponsorController = async(req, res) =>{
    try{
        const {industry,description,contact_email,contact_phone,budget,location,sponsor_id,video,photo}=req.body;
        if (!industry || !description || !contact_email || !contact_phone || !budget || !location || !sponsor_id){
            return res.status(400).send({message:"Please fill in all fields"});
        }
        const sponsorExists = await sponsorModel({sponsor_id});
        if(!sponsorExists){
            return res.status(400).send({message:"Sponsor already exists"});
        }
        const sponsor =  await sponsorModel.create({
                industry,
                description,
                contact_email,
                contact_phone,
                budget,
                location,
                video,
                photo,
                sponsor_id
        });
        return res.status(201).send({message:"Sponsor created successfully",sponsor});
        }catch (error) {
            return res.status(500).send({ message: error.message });
        }
    };

export const getAllSponsors = async(req,res)  => {
    try {
        const sponsor = await sponsorModel.find({});
        return res.status(200).send({ message: "All sponsors", sponsor,success:true });
    } catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}

export const updateSponsor = async (req, res) => {
    try {
        const {id}=req.params;
        const sponsor = await sponsorModel.findByIdAndUpdate({_id:id},req.body,{new:true});
        return res.status(200).send({ message: "Sponsor updated successfully", sponsor,success:true });
    }
    catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}
export const getSponsor = async (req, res) => {
    try {
        const {id}=req.params;
        const sponsor = await sponsorModel.findById({_id:id});
        return res.status(200).send({ message: "sponsor", sponsor,success:true });
    } catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}
export const deleteSponsor = async (req, res) => {
    try {
        const {id}=req.params;
        const sponsor = await sponsorModel.findByIdAndDelete({_id:id});
        return res.status(200).send({ message: "Sponsor deleted", sponsor,success:true });
    }
    catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}