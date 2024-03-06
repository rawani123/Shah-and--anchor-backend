import userModel from "../modules/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import sponsorModel from "../modules/sponsorSchema.js";
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

    const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
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

export const updateSponsor= async(req,res) =>{
  try{
    const {id}= req.params;
    const sponsor = await sponsorModel
  }
}