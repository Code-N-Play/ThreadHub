import express from "express";
import UserController from "../controllers/UserController.js";
import isLoggedIn from "../middleware/Auth.js";
import usermodel from "../models/Users.js";
import upload from "../routes/multer.js";

import localStrategy from "passport-local";
import passport from "passport";
passport.use(new localStrategy(usermodel.authenticate()));



const router = express.Router();



router.get("/profile",isLoggedIn, UserController.profile);

router.get("/edit",isLoggedIn, UserController.edit); // edit page 

router.post("/update",upload.single('image'), UserController.update );


export default router;
