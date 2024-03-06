import sponsorModel from "../modules/sponsorSchema.js";

export const sponsorController = async(req, res) =>{
    try{
        const {industry,description,contact_email,contact_phone,budget,location,sponsor_id,photo}=req.body;
        if (!industry || !description || !contact_email || !contact_phone || !budget || !location || !sponsor_id){
            return res.status(400).send({message:"Please fill in all fields"});
        }
        const sponsorExists = await sponsorModel({sponsor_id});
        if(!sponsorExists){
            return res.status(400).send({message:"Sponsor already exists"});
            
        }

        const video=req.file?.path;

        if(!video){
            throw new ApiError(400,"Video Not uploded")
        }

        const uploadedVideo= await uploudVideoOnCloudinary(video);

        if(!uploadedVideo){
            throw new ApiError(400,"Video Not uploaded")
        }

        const sponsor =  await sponsorModel.create({
                industry,
                description,
                contact_email,
                contact_phone,
                budget,
                location,
                video:uploadedVideo?.url,
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


