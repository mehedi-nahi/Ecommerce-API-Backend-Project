import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as CategoryController from "../app/controllers/CategoryController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";
import * as WishlistController from "../app/controllers/WishlistController.js";


//Users
router.post("/Login", UserController.Login)
router.post ("/VerifyLogin", UserController.VerifyLogin)
router.post("/CreateUserProfile", UserController.CreateUserProfile)
router.post("/UpdateUserProfile", UserController.UpdateUserProfile)
router.get("/ReadUserProfile", UserController.ReadUserProfile)

//Brands
router.post("/BrandList", BrandController.BrandList)


//Categories
router.post("/CategoryList", CategoryController.CategoryList)


//Cart
router.post("/CreateCart", CartListController.CreateCart)
router.put("/UpdateCart", CartListController.UpdateCart)
router.get("/ReadCart", CartListController.ReadCart)
router.delete("/RemoveCart", CartListController.RemoveCart)

//Wish
router.post("/CreateWish", WishlistController.CreateWish)
router.post("/ReadWish", WishlistController.ReadWish)
router.post("/RemoveWish", WishlistController.RemoveWish)

//Product
router.post("/ProductListByCategory", ProductController.ProductListByCategory)
router.post("/ProductListBySlider", ProductController.ProductListBySlider)
router.post("/ProductListByRemark", ProductController.ProductListByRemark)
router.post("ProductListByBrand", ProductController.ProductListByBrand)
router.post("/ProductDetailsID", ProductController.ProductDetailsID)
router.post("/ProductListByKeyword", ProductController.ProductListByKeyword)
router.post ("/ProductReviewListByID", ProductController.ProductReviewListByID)
router.post("/CreateProductReview", ProductController.CreateProductReview)

//Invoice
router.post("/CreateInvoice", InvoiceController.CreateInvoice)
router.post("/ReadInvoiceList", InvoiceController.ReadInvoiceList)
router.post("/ReadInvoiceDetails", InvoiceController.ReadInvoiceDetails)



export default router;