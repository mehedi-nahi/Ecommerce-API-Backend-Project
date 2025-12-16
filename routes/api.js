import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";
import * as BrandController from "../app/controllers/BrandController.js";
import * as ProductController from "../app/controllers/ProductController.js";
import * as CategoryController from "../app/controllers/CategoryController.js";
import * as CartListController from "../app/controllers/CartListController.js";
import * as InvoiceController from "../app/controllers/InvoiceController.js";
import * as WishlistController from "../app/controllers/WishlistController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";


//Users
router.post("/Login", UserController.Login)
router.post ("/VerifyLogin", UserController.VerifyLogin)
router.post("/CreateUserProfile",AuthMiddleware, UserController.CreateUserProfile)
router.post("/UpdateUserProfile",AuthMiddleware, UserController.UpdateUserProfile)
router.get("/ReadUserProfile",AuthMiddleware, UserController.ReadUserProfile)

//Brands
router.get("/BrandList", BrandController.BrandList)


//Categories
router.get("/CategoryList", CategoryController.CategoryList)


//Cart
router.post("/CreateCart",AuthMiddleware, CartListController.CreateCart)
router.post("/UpdateCart", AuthMiddleware, CartListController.UpdateCart)
router.get("/ReadCartList",AuthMiddleware, CartListController.ReadCartList)
router.post("/RemoveCart",AuthMiddleware, CartListController.RemoveCart)


//Review
router.post("/CreateProductReview",AuthMiddleware, UserController.CreateUserReview)
router.post("/UpdateProductReview",AuthMiddleware, UserController.UpdateUserReview)

//Wish
router.post("/CreateWish",AuthMiddleware, WishlistController.CreateWish)
router.get("/ReadWishList",AuthMiddleware, WishlistController.ReadWishList)
router.post("/RemoveWish",AuthMiddleware, WishlistController.RemoveWish)
 
//Product
router.get("/ProductListByCategory/:CategoryID", ProductController.ProductListByCategory)
router.get("/ProductListBySlider", ProductController.ProductListBySlider)
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark)
router.get("/ProductListByBrand/:BrandID", ProductController.ProductListByBrand)
router.get("/ProductDetailsID/:ProductID", ProductController.ProductDetailsID)
router.get("/ProductListByKeyword/:keyword", ProductController.ProductListByKeyword)
router.get ("/ProductReviewListByID/:ProductID", ProductController.ProductReviewListByID)


//Invoice
router.post("/CreateInvoice", AuthMiddleware, InvoiceController.CreateInvoice)
router.get("/ReadInvoiceList", AuthMiddleware, InvoiceController.ReadInvoiceList)
router.get("/ReadInvoiceDetails",AuthMiddleware, InvoiceController.ReadInvoiceDetails)



export default router;