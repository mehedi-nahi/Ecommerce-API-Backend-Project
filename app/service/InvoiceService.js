import CartModel from "../model/cartsModel.js"
import ProfileModel from "../model/profilesModel.js"
import InvoiceModel from "../model/invoicesModel.js"
import InvoiceProductModel from "../model/invoiceProductsModel.js"
import mongoose from "mongoose";
const ObjectId=mongoose.Types.ObjectId;
import formData from "form-data";
import axios from "axios";


//============Step:01  Calculate total amount and vat=================


export const CreateInvoiceService = async (req) => {
    try {
        let user_id = new ObjectId(req.headers.user_id);
        let cus_email = req.headers.email;

        let matchStage = {$match: {userID: user_id}};
        let JoinStageProduct = {
            $lookup: {
                from: "products",
                localField: "productID",
                foreignField: "_id",
                as: "product"
            }
        };
        let unwindStage = {$unwind: "$product"};
        let CartProducts= await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindStage
        ]);

        let totalAmount=0;
        CartProducts.forEach((element)=>{
            let price;
            if(element['product']['discount'])
            {
                price=element['product']['discountPrice'];
            }
            else{
                price=element['product']['price'];
            }
            totalAmount+= (price*parseFloat(element['qty']));
        })

        let vat= (totalAmount*0.05);
        let payable=totalAmount+vat;


        //============Step:02 Prepare Customer Details and Shipping Address=================

        let Profile= await ProfileModel.aggregate([matchStage]);
        let cus_details=`Name:${Profile[0]['cus_name']} , Address': ${Profile[0]['cus_add']}, Phone: ${Profile[0]['cus_phone']},`
        let ship_details=`Name: ${Profile[0]['ship_name']}, , City: ${Profile[0]["ship_city"]} , Address: ${Profile[0]['ship_add']}, Phone: ${Profile[0]['ship_phone']}`;


        //============Step:03 Transaction and Other id's=================

        let tran_id=Math.floor(1000000000 + Math.random() * 9000000000);
        let val_id=0;
        let delivery_status="pending";
        let payment_status="pending";


        //============Step:04 Create Invoice=================

        let createInvoice= await InvoiceModel.create({
            userID: user_id,
            payable: payable,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,
            payment_status: payment_status,
            delivery_status: delivery_status,
            total: totalAmount,
            vat: vat
        })



        //============Step:05 Create Invoice Product=================
        let invoice_id=createInvoice['_id'];

        CartProducts.forEach( async (element)=> {
            await InvoiceProductModel.create({
                userID: user_id,
                invoiceID: invoice_id,
                productID: element['productID'],
                qty: element['qty'],
                price: element['product']['price'],
                size: element['size'],
                color: element['color'],
            });
        });

        //============Step:06 Remove Cart=================
        await CartModel.deleteMany({userID:user_id});


        return{status:"success",data:invoice_id};

    } catch (e) {
        return {status: "error", data: e.toString()};
    }
}

export const PaymentFailService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}

export const PaymentCancelService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}

export const PaymentIPNService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}

export const PaymentSuccessfulService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}

export const InvoiceListService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}

export const InvoiceProductListService = async (req) => {
    try {

    }
    catch (e) {
        return { status: "error", data: e.toString() };
    }
}
