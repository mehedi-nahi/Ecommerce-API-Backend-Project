export const BrandList=async(req,res)=>{
    try{
        return res.json({status:"success"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}