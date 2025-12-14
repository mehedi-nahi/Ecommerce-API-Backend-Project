export const Login=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "User Login successfull"})
        }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
        }
 }
