import passport from "passport";
import usermodel from "../models/Users.js";
import threadmodel from "../models/Threads.js";

class HomeController{

    static async index(req,res){
        const user = await usermodel
        .findOne({username: req.session.passport.user })
        .populate("Threads")
        let isAuthenticated = false;
        if (req.isAuthenticated()){
            isAuthenticated = true;
        }
        res.render("index", { isAuthenticated: isAuthenticated}, {user});
    }

    static async threadpost(req,res){
        const user = await usermodel.findOne({ username: req.session.passport.user });
        const thread = await threadmodel.create({
          user: user._id,
          thread: req.body.threads
        });
      
        user.threads.push(thread._id);
        await user.save();
        res.redirect("/");
    }
}

export default HomeController;