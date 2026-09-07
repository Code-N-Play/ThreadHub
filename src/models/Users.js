import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/ThreadHub");

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    name:{
        type:String
    },
    profileImage:{
        type:String
    },
    bio:{
        type:String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});
const plm = passportLocalMongoose.default || passportLocalMongoose;

userSchema.plugin(plm);

export default mongoose.model("Users", userSchema);
