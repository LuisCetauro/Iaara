"use server";

import { connectToDb } from "./connectToDb";
import { User, Comentario, Estoque } from "./models";
import { redirect } from "next/navigation";

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

export const DeleteItem = async (formData) => {
  const { slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const res = await Estoque.findOneAndDelete({ slug: slug });
    console.log(res);
  } catch (error) {
    console.log(error);
    return { error: "Email já cadastrado" };
  }
  redirect("/Admin/Mural");
};

export const UpdateValue = async (formData) => {
  const { Valor, slug } = Object.fromEntries(formData);
  try {
    connectToDb();
    const res = await Estoque.findOneAndUpdate(
      { slug: slug },
      { $set: { Valor: Valor } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    return { error: "Email já cadastrado" };
  }
  redirect("/Admin/Mural");
};

export const UpdateQuantity = async (formData) => {
  const { Quantidade, slug } = Object.fromEntries(formData);
  try {
    connectToDb();
    const res = await Estoque.findOneAndUpdate(
      { slug: slug },
      { $set: { Quantidade: Quantidade } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    return { error: "Email já cadastrado" };
  }
  redirect("/Admin/Mural");
};

export const addNewItem = async (formData) => {
  const { nome, Valor, Quantidade, slug } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newItem = new Estoque({
      nome,
      Valor,
      Quantidade,
      slug,
    });
    await newItem.save();
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
  redirect("/Admin/Mural");
};

export const updatePassword = async (formData) => {
  const { email, password, newPasswordcheck, newPassword } =
    Object.fromEntries(formData);

  if (newPassword !== newPasswordcheck) {
    return { error: "As novas senhas não coincidem." };
  }
  try {
    await connectToDb();
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "Usuário não encontrado." };
    }
    if (user.password !== password) {
      return { error: "Senha antiga incorreta." };
    }
    user.password = newPassword;
    await user.save();
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
  redirect("/Admin");
};
