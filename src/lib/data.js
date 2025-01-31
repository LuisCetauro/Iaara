import { User, Comentario, Estoque } from "./models";
import { connectToDb } from "./connectToDb";
import { unstable_noStore as noStore } from "next/cache";

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
export const getComentarios = async () => {
  try {
    connectToDb();
    const comentarios = await Comentario.find();
    return comentarios;
  } catch (error) {
    console.log(error);
  }
};

export const getEstoque = async () => {
  try {
    connectToDb();
    const estoque = await Estoque.find();
    return estoque;
  } catch (error) {
    console.log(error);
  }
};
