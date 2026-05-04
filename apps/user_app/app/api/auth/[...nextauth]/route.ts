import NextAuth from "next-auth";
import { auuthOption } from "../../../lib/auth";


const handler = NextAuth(auuthOption);

export { handler as GET , handler as POST }