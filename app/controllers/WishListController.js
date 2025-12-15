export const CreateWish=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "CreateWish successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const ReadWishList=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ReadWish successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const RemoveWish=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "RemoveWish successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}