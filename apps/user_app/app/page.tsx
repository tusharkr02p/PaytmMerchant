import { getServerSession } from "next-auth";
import { auuthOption } from "./lib/auth";
import { redirect } from "next/navigation";


export default async function Page() {
  
  const session = await getServerSession(auuthOption);
  if(session?.user){
    redirect('/dashboard')
  }
   return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
     

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-10 py-24 grid grid-cols-2 gap-10">
        
        <div className="flex flex-col justify-center">
          <div className="text-6xl font-bold leading-tight">
            Send Money <br />
            Instantly.
          </div>

          <div className="text-gray-500 text-xl mt-6">
            Secure wallet platform with fast bank transfers,
            transaction history and real time balance updates.
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="/api/auth/signin"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
              Get Started
            </a>

            <button className="border px-6 py-3 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="w-full h-[400px] bg-purple-100 rounded-3xl flex items-center justify-center text-3xl font-bold text-purple-600">
            Wallet UI
          </div>
        </div>
      </div>
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
