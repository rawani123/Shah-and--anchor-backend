export const createEvent = async(req, res) => {
    try{
        const {userId,eventName,eventType,desc,reason,location,date} = req.body;
        if(!userId || !eventName || !eventType || !desc || !reason || !location || !date){
            return res.status(400).send({message:"Please fill in all fields"});
        }

        const newEvent = new eventModel({
            userId,
            eventName,
            eventType,
            desc,
            reason,
            location,
            date
        });

        const user = await userModel.findById({_id:userId}).select("-password");
        user.events.push({
            id:newEvent._id,
            eventName,
            eventType,
            desc,
            reason,
            location,
            date
        });

        return res.status(201).send({message:"Event created successfully",newEvent,success:true});

    }
    catch(error){
        return res.status(500).send({message:error.message,success:false});
    }
}

export const getAllEvents = async(req, res) => {
    try{
        const events = await eventModel.find({});
        return res.status(200).send({message:"All events",events,success:true});
    }
    catch(error){
        return res.status(500).send({message:error.message,success:false});
    }
}