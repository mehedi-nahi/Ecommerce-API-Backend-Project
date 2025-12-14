export const CreateInvoice=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "Invoice Created successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ReadInvoiceList=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ReadInvoiceList successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}
export const ReadInvoiceDetails=async(req,res)=>{
    try{
        return res.json({status:"success","Message": "ReadInvoiceDetails successfully"})
    }
    catch(e){
        return res.json({status:"error","Message": e.toString()});
    }
}