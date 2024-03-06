import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    isSponsor:{
        type:Boolean,
        default:false,
    },
    notifications:{
        type:Array,
        default:[],
    },
    seenNotifications:{
        type:Array,
        default:[],
    },
    applications:{
        type:Array,
        default:[],
    },
},{timestamps:true});

const userModel= mongoose.model("User",userSchema);

export default userModel;