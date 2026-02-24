import { Post } from "../models/post.model.js";

//Create a new post
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;
        if (!name || !description || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const post = await Post.create({ name, description, age });
        res.status(201).json({ message: "Post created successfully", post });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

//Read all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);

    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });

    }
}
export { createPost, getPosts };