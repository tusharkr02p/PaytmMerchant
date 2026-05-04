import { authOpption } from "@/app/lib/auth";
import NextAuth  from "next-auth"

const handler  = NextAuth(authOpption);

export{handler as GET  , handler as POST}