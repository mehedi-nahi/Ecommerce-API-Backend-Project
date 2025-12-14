export const ProductListByCategory=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductListByCategory successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductListBySlider=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductListBySlider successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductListByRemark=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductListByRemark successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductListByBrand=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductListByRemark successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductDetailsID=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductDetailsID successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductListByKeyword =async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductListByKeyword successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ProductReviewListByID=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ProductReviewListByID successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const CreateProductReview=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "CreateProductReview successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}