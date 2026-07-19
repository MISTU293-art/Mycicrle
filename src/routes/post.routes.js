import express from 'express';
import {postCreate,getPost }from "../controllers/post.controller.js";

import multer from 'multer';
const router=express.Router();
const upload = multer({
    storage: multer.memoryStorage(),
});
router.post("/create-post", upload.single("image"),postCreate);
router.get("/get-post",getPost)
export default router;