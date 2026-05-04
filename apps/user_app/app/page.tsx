

"use client" ;



import Appbar from '@repo/ui/appbar'
import { signIn, signOut,useSession } from 'next-auth/react'

export default function Page() {
  const {data: session,status} = useSession();
     if(status === "loading") return null;
  return (
   <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session?.user} />
      
   </div>
   
  );
}










































// import { useBalance } from "@repo/store";

// export default function(){
//     const balance = useBalance();
//     return <div>
//         hi there{balance}
//     </div>
// }
