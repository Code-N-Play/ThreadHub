import usermodel from "../models/Users.js";
import passport from "passport";

class UserController {
 
    static async profile(req, res) {
        const user = await usermodel.findOne({username:req.session.passport.user})
        res.render('profile', {user});
    }

    static async edit(req,res){
        const user = await usermodel.findOne({username: req.session.passport.user});
        res.render('edit',{user});
    }

    static async update(req,res){
        const user = await usermodel.findOneAndUpdate({username: req.session.passport.user},
            {username: req.body.username, name: req.body.name, bio:req.body.bio},
            {new:true}
        );
        user.profileImage = req.file.filename;
        await user.save();
        res.redirect("/user/profile");
    }

}

export default UserController;