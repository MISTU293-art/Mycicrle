import mongoose  from "mongoose";

const postShema = new mongoose.Schema({
    image:String,
    caption:String,
    username:String
},
{
    timestamps:true
});
const postModel = mongoose.model("posts",postShema);
export default postModel;
