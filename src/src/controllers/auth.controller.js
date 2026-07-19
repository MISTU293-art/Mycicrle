import userModel from '../models/User.models.js';

export  default async function RegisterUser(req,res) {

    const {username,full_name}=req.body;
    if(!username || !full_name){
        return res.status(400).json({
            message:"please fill all fields"
        })
    }
    const isUsernameAvailableOrNot = await userModel.findOne({username});
    if(isUsernameAvailableOrNot){
        return res.status(409).json({
            message:"Username is not available"
        })
    };

   const user= await userModel.create({
        username,full_name
    });
    return res.status(201).json({
        message:"user created successfully",
        user
    })
    
}