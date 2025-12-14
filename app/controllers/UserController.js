export const Login=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Login successfull"})
        }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
        }
 }

export const VerifyLogin=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Verified"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const CreateUserProfile=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Created user profile successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const UpdateUserProfile=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Updated user profile successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const ReadUserProfile=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Read user profile successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
