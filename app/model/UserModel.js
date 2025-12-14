import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email:{type:String,unique:true,required:true},
        firstName:{type:String,_required:true},
        lastName:{type:String,required:true},
        password:{type:String,unique:true,required:true},
        mobile:{type:String,unique:true,required:true},
        otp:{type:String,default:0},
        },
{
    timestamps:true,
    versionKey:false
       }
           )

const Users = mongoose.model("users",UserSchema);

export default Users;