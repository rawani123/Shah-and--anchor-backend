import userModel from "../modules/user.model";
import bcrypt from "bcrypt";
export const registerController = async (req, res) => {
    try {
        const {userName,email,password}=req.body;
        if(!userName || !email || !password){
            return res.status(400).send({message:"Please fill in all fields"});
        }
        const userExists = await userModel({email});
        if(userExists){
            return res.status(400).send({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}