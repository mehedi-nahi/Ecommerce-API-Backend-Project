const mongoose = require("mongoose");
const CartModel=require("../model/cartsModel.js")
const ProfileModel=require("../model/profilesModel.js")
const InvoiceModel=require("../model/invoicesModel.js")
const InvoiceProductModel=require("../model/invoiceProductsModel.js")
const PaymentSettingModel=require("../model/paymentSettingsModel.js")
const ObjectId=mongoose.Types.ObjectId;
const FormData = require("form-data");
const axios = require("axios");



export const CreateInvoiceService = async (req) => {
    try {


    }
    catch (e) {
        return { status: "error", data: e.toString() };
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
