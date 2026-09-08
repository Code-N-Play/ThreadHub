import mongoose from "mongoose";

const threadSchema = mongoose.Schema({
    user:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }
    ],
    thread:{
        type:String
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Threads"
        }
    ],
    dislikes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Threads"
        }
    ],
    datecreated:{
        type:Date,
        default:Date.now()
    }
    
});

export default mongoose.model("Threads", threadSchema);