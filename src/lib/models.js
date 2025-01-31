import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);

const ComentarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },

    contato: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const ItensEstoqueSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    Valor: {
      type: Number,
      required: true,
    },
    Quantidade: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Comentario =
  mongoose.models?.Comentario || mongoose.model("Comentario", ComentarioSchema);
export const Estoque =
  mongoose.models?.Estoque || mongoose.model("Estoque", ItensEstoqueSchema);
