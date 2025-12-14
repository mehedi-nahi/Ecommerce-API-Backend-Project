export const CreateCart=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "CreateCart successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}

export const UpdateCart=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "UpdateCart successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ReadCart=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ReadCart successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const RemoveCart=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "RemoveCart successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
