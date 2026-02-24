import { Router } from "express";
import { createPost, getPosts } from "../contollers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);

export default router;