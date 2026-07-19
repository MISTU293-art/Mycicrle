import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    full_name:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

const userModel = mongoose.model("users",UserSchema);
export default userModel;