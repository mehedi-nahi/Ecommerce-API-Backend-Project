import UserModel from '../model/UserModel.js';
import { TokenEncode } from '../utility/tokenUtility.js';
import SendEmail from '../utility/emailUtility.js';


export const Registration=async(req,res)=>{
    try{
     let reqBody=req.body;
     await UserModel.create(reqBody);
     return res.json({status: "success", "Message:": "User Registered Successfully"})
    }
    catch(e) {
     return res.json({status: "error", "Message:": e.toString()})
    }
 }

 export const Login=async(req,res)=>{

    try{
        let reqBody=req.body;
        let data=await UserModel.findOne(reqBody)

        if (data==null){
            return res.json({status:"error","Message": "Invalid Credentials"})
        }
        else{
            //Login Success

            let token = await TokenEncode(data['email'], data['_id'])

            return res.json({status:"success","Message": "User Login successfull",data:{token}})
        }

    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
        }
 }




 export const ProfileDetails=async(req,res)=>{

    try{
        let user_id=req.headers["user_id"];
        let data=await UserModel.findOne({"_id":user_id});
        return res.json({status:"success",message: "Profile is viewed Successfully",data:data});
    }
    catch (e) {
        return res.json({status:"fail",message: e.toString()});

    }
 }


 export const ProfileUpdate=async(req,res)=> {

     try {
         let reqBody = req.body;
         let user_id = req.headers['user_id'];
         await UserModel.updateOne({"_id": user_id}, reqBody);
         return res.json({status: "success", message: "Profile is updated Successfully"});
     } catch (e) {
         return res.json({status: "fail", message: e.toString()});
     }
 }


export const EmailVerify=async(req,res)=> {
    try {
        let email = req.params.email;
        let data = await UserModel.findOne({"email": email})
        if (data == null) {
            return res.json({status: "error", message: "Email not registered"})
        } else {
            //Send OTP to email
            let code = Math.floor(100000 + Math.random() * 900000);
            let EmailTo = data["email"];
            let EmailText = "Your verification code is" + code;
            let EmailSubject = "Task Manager-Email Verification Code"
            await SendEmail(EmailTo, EmailText, EmailSubject)

            //Update OTP in USER
            await UserModel.updateOne({email: email}, {otp: code})
            return res.json({status: "success", message: "Verification code sent to email"})
        }
    }
    catch (e) {
        return res.json({status: "fail", message: e.toString()})
    }
}


export const CodeVerify=async(req,res)=>{

return res.json({status:"success"});
 }

export const ResetPassword=async(req,res)=>{

return res.json({status:"success"});
 }
