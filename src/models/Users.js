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
    },
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Threads"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ]
});
const plm = passportLocalMongoose.default || passportLocalMongoose;

userSchema.plugin(plm);

export default mongoose.model("Users", userSchema);
