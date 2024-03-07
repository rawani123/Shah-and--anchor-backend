import userModel from "../modules/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
export const registerController = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).send({ message: "Please fill in all fields",success:false });
    }
    const userExists = await userModel({ email });
    if (!userExists) {
      return res.status(400).send({ message: "User already exists",success:false });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
    });

    return res.status(201).send({ message: "User created successfully", user,success:true });
  } catch (error) {
    return res.status(500).send({ message: error.message,success:false });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ message: "Please fill in all fields",success:false });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User does not exist",success:false });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).send({ message: "Invalid credentials",success:false });
    }
    user.password = undefined;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    return res
      .status(200)
      .send({ message: "User logged in successfully", user, token ,success:true});
  } catch (error) {
    return res.status(500).send({ message: error.message,success:false });
  }
};

export const getAllUser = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({ message: "All users", users,success:true });
    } catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.user.id;
        const user = await userModel.findById({_id:id}).select("-password");
        if(!user){
          return res.status(400).send({
            success:false,
            message:"User Doesn't exist"
          })
        }
        return res.status(200).send({data:{
          username: user.userName,
          userID:user._id,
          email:user.email,
          name:user.name,
          isAdmin: user.isAdmin,
          isDoctor: user.isSponsor,
          notification: user.notifications,
          seennotification :user.seenNotifications
        }, message: "User",success:true });
    } catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id}=req.params;
        const user = await userModel.findByIdAndDelete({_id:id});
        return res.status(200).send({ message: "User deleted", user,success:true });
    }
    catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id}=req.params;
        const user = await userModel.findByIdAndUpdate({_id:id},req.body,{new:true});
        return res.status(200).send({ message: "User updated successfully", user,success:true });
    }
    catch (error) {
        return res.status(500).send({ message: error.message,success:false });
    }
}

export const getAllNotification=async(req,res)=>{
  try{
    const {id}=req.user;
    const user=await userModel.findById({_id:id});
    const notifications=user.notifications;
    return res.status(200).send({message:"All notifications",notifications,success:true});
  }catch(error){
    return res.status(500).send({message:error.message,success:false});
  }
}