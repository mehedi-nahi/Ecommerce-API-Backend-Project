import express from "express";
const router = express.Router();
import * as UserController from "../app/controllers/UserController.js";



//Users

router.post("/Login", UserController.Login)


export default router;