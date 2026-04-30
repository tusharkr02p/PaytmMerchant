"use client";

import { useBalance } from "@repo/store";

export default function Page() {
  const balance = useBalance((s) => s.balance);

  return <div className="bg-green-400 text-white">hi there {balance}</div>;
}