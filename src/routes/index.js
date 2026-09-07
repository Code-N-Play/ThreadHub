import express from "express";
import AuthController from "../controllers/AuthController.js";
import usermodel from "../models/Users.js";
import localStrategy from "passport-local";
import passport from "passport";


passport.use(new localStrategy(usermodel.authenticate()));

const router = express.Router();



router.get("/", (req, res) => {
  res.render("index", { title: "ThreadHub" });
});

router.get("/login", AuthController.loginPage);

router.post("/login",passport.authenticate("local",{
  successRedirect: '/user/profile',
  failureRedirect: "/"
}), AuthController.login);

router.get("/register", AuthController.registerPage);
router.post("/register", AuthController.register);

router.get("/logout", AuthController.logout);




export default router;
