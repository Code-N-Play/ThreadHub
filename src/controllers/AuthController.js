import passport from "passport";
import usermodel from "../models/Users.js";

class AuthController {
 
    static async loginPage(req, res) {
        res.render('login');
    }

    static async login(req, res) {
    }

    static async registerPage(req, res) {
        res.render('register');
         
    }

    static async register(req, res) {
        var userdata = new usermodel({
            username:req.body.username,
            email:req.body.email
        });

        usermodel.register(userdata,req.body.password)
        .then(function(registreduser) {
            passport.authenticate("local")(req,res,function(){
                res.redirect('/user/profile');
            })
            
        })
         
    }

    static async logout(req,res,next){
        req.logout(function(err){
            if(err){return next(err);}
            res.redirect('/');
        });
    };

}

export default AuthController;