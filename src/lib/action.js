"use server";

import { connectToDb } from "./connectToDb";
import { getPost } from "./data";
import { Post, User, Comentario } from "./models";
import { redirect } from "next/navigation";

const CheckImageValid = async (img) => {
  let fixedImg = img;

  if (!img.startsWith("/") && !img.startsWith("https://")) {
    const indexHttp = img.indexOf("http://");
    const indexHttps = img.indexOf("https://");

    if (indexHttp !== -1 || indexHttps !== -1) {
      fixedImg =
        indexHttp !== -1 ? img.substring(indexHttp) : img.substring(indexHttps);
    } else if (indexHttp == -1 || indexHttps == -1) {
      fixedImg = "/notfound.webp";
      console.log("URL inválida:", img);
    }
  }

  return fixedImg;
};

export const AddPost = async (formData) => {
  const { title, desc, slug, username, img, email } =
    Object.fromEntries(formData);
  CheckImageValid(img);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      username: username,
      img: fixedImg,
      email,
    });

    await newPost.save();
  } catch (error) {
    return { error: "Something went wrong" };
  }
  redirect("/Mural");
};
export const deletePost = async (formData) => {
  const { slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const post = await getPost(slug);
    await Post.deleteOne({ slug: post.slug });
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }

  redirect("/Admin/Mural");
};

export const addComentario = async (formData) => {
  const { nome, contato, desc, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newComentario = new Comentario({
      nome,
      contato,
      desc,
      slug,
    });
    await newComentario.save();
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
  redirect("/");
};

export const deleteComentario = async (formData) => {
  const { slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Comentario.findOneAndDelete({ slug: slug });
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
  redirect("/Admin");
};

export const AddUserCredentials = async (formData) => {
  const { username, email, password, passwordcheck } =
    Object.fromEntries(formData);

  try {
    connectToDb();
    const res = await User.findOne({ email: email });
    console.log(res);
    if (!res) {
      if (password === passwordcheck) {
        const newUser = new User({
          email,
          username,
          password,
        });
        await newUser.save();
      }
    }
  } catch (error) {
    console.log(error);
    return { error: "Email já cadastrado" };
  }
  redirect("/");
};

export const RedirectToBlog = async () => {
  redirect("/Mural");
};
