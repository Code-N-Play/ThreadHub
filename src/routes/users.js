import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();



router.get("/profile", UserController.profile);


export default router;
