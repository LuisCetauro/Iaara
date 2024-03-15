import { Comentario, Post, User } from "./models";
import { connectToDb } from "./connectToDb";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (email) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findOne({ email: email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const getAdmin = async (email) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findOne({ email: email });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getComentario = async () => {
  try {
    connectToDb();
    const comentarios = await Comentario.find();
    return comentarios;
  } catch (error) {
    console.log(error);
  }
};
