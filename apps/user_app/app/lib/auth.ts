import db from "@repo/db/cli";
import bcrypt from "bcrypt";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";

const authSchema = z.object({
  phone: z.string().min(10, "Invalid phone number").max(13),
  password: z.string().min(6, "Password to short"),
});

export const auuthOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"phone" | "password", string> | undefined,
      ) {
        if (!credentials) return null;
        const parsed = authSchema.safeParse(credentials);
        if (!parsed.success) return null;
        const { phone, password } = parsed.data;

        const existingUser = await db.user.findFirst({
          where: {
            number: phone,
          },
        });

        //Login
        if (existingUser) {
          const isValid = await bcrypt.compare(password, existingUser.password);

          if (!isValid) return null;

          return {
            id: existingUser.id.toString(),
            name: existingUser.name ?? " ",
            email: existingUser.number,
          };
        }

        try {
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await db.user.create({
            data: {
              number: phone,
              password: hashedPassword,
            },
          });
  
          return {
            id: user.id.toString(),
            name: user.name ?? "",
            email: user.number,
          };
          
        } catch (error) {
          console.error(error);
          return null;
          
        }

      },
    }),
  ],
    secret:process.env.JWT_SECRET || "secret",

    callbacks:{
      async session({session , token}:{session:Session ; token: JWT}){
        if(session.user && token.sub){
        session.user.id = token.sub;


        }
        return session;

      }
    }



};
