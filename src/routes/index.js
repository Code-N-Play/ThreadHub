import express from "express";
import AuthController from "../controllers/AuthController.js";
import HomeController from "../controllers/HomeController.js";
import usermodel from "../models/Users.js";
import localStrategy from "passport-local";
import passport from "passport";



passport.use(new localStrategy(usermodel.authenticate()));

const router = express.Router();



router.get("/",HomeController.index);

router.get("/login", AuthController.loginPage);

router.post("/login",passport.authenticate("local",{
  successRedirect: '/user/profile',
  failureRedirect: "/"
}), AuthController.login);

router.get("/register", AuthController.registerPage);
router.post("/register", AuthController.register);

router.get("/logout", AuthController.logout);

router.post("/threadpost",HomeController.threadpost);




export default router;
