import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";

import credentials from "next-auth/providers/credentials";
import { connectToDb } from "./connectToDb";
import { User } from "./models";

const credentialsConfig = credentials({
  name: "Credentials",

  credentials: {
    email: {
      label: "Email",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },

  async authorize(credentials) {
    try {
      connectToDb();
      const user = await User.findOne({ email: credentials.email });
      if (user) {
        if (user.password === credentials.password) {
          return user;
        } else return null;
      }
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  },
});

const config = {
  providers: [credentialsConfig],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, profile }) {
      connectToDb();
      const loggedIn = await User.findOne({ email: profile?.email });
      if (!loggedIn) {
        const newUser = new User({
          userId: user?.id,
          username: profile?.name,
          email: profile?.email,
          image: profile?.image,
        });
        await newUser.save();
      }
      return true;
    },
  },

  trustHost: true,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
