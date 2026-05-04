import { prisma } from "@repo/db/cli";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { auuthOption } from "../../lib/auth";



export const GET = async() => {

  const session = await getServerSession(auuthOption);
  if(session?.user){
    return NextResponse.json({
      user:session.user
    })
  }
  return NextResponse.json({
    message: "you are not logged in"
  },{
    status:403
  })

}









// export async function GET() {
//   try {
//     const users = await prisma.user.findMany();
//     return NextResponse.json(users);
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
//   }
// }