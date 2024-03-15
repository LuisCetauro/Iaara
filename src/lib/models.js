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

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    username: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
    },
    email: {
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

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Comentario =
  mongoose.models?.Comentario || mongoose.model("Comentario", ComentarioSchema);
