import userModel from "../models/User.models.js";
import postModel from "../models/Post.models.js";
import uploads from "../services/stroage.services.js";
export  async function postCreate(req, res) {
    try {
        const { username, image, caption } = req.body;
        if (!username) {
            return res.status(400).json({
                message: "Please Enter Your Username .",
            });
        }

        const userExitsorNot = await userModel.findOne({ username });
        if (!userExitsorNot) {
            return res.status(404).json({
                message: "Please Register First To Upload Posts",
            });
        }
        const result = await uploads(req.file.buffer);
        const post = await postModel.create({
            username: req.body.username,
            image: result.url,
            caption: req.body.caption,
        });

        return res.status(201).json({
            message: "post created",
            post,
        });
    }
    catch (error) {
        return res.status(500).json({
            message:"Internal Server Error."
        })
    }
}


export  async function getPost(req, res) {
    try { 
      const posts=  await postModel.find();
        return res.status(200).json({
            message:"Posts fetched Sucessfully",
            posts
        })
    }
    catch (error) {
        return res.status(500).json({
            message:"Currently We are Facing An Error."
        })
    }
}