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
router.get("/BrandList", BrandController.BrandList)


//Categories
router.get("/CategoryList", CategoryController.CategoryList)


//Cart
router.post("/CreateCart", CartListController.CreateCart)
router.post("/UpdateCart", CartListController.UpdateCart)
router.get("/ReadCartList", CartListController.ReadCartList)
router.post("/RemoveCart", CartListController.RemoveCart)

//Wish
router.post("/CreateWish", WishlistController.CreateWish)
router.get("/ReadWishList", WishlistController.ReadWishList)
router.post("/RemoveWish", WishlistController.RemoveWish)

//Product
router.get("/ProductListByCategory", ProductController.ProductListByCategory)
router.get("/ProductListBySlider", ProductController.ProductListBySlider)
router.get("/ProductListByRemark", ProductController.ProductListByRemark)
router.get("/ProductListByBrand", ProductController.ProductListByBrand)
router.get("/ProductDetailsID", ProductController.ProductDetailsID)
router.get("/ProductListByKeyword", ProductController.ProductListByKeyword)
router.get ("/ProductReviewListByID", ProductController.ProductReviewListByID)
router.post("/CreateProductReview", ProductController.CreateProductReview)

//Invoice
router.post("/CreateInvoice", InvoiceController.CreateInvoice)
router.get("/ReadInvoiceList", InvoiceController.ReadInvoiceList)
router.get("/ReadInvoiceDetails", InvoiceController.ReadInvoiceDetails)



export default router;