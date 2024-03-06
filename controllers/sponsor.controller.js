import sponsorModel from "../modules/sponsorSchema";

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
        });
        return res.status(201).send({message:"Sponsor created successfully",user});
        }catch (error) {
            return res.status(500).send({ message: error.message });
        }
    };

