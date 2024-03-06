import userModel from "../modules/user.model.js";
import bcrypt from "bcrypt";
export const registerController = async (req, res) => {
    try {
        const {userName,email,password}=req.body;
        if(!userName || !email || !password){
            return res.status(400).send({message:"Please fill in all fields"});
        }
        const userExists = await userModel({email});
        if(!userExists){
            return res.status(400).send({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await userModel.create({
            userName,
            email,
            password:hashedPassword,
        });

        return res.status(201).send({message:"User created successfully",user});
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

export const loginController = async (req, res) => {
    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).send({message:"Please fill in all fields"});
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).send({message:"User does not exist"});
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).send({message:"Invalid credentials"});
        }

        
        return res.status(200).send({message:"Login successful",user});
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}
