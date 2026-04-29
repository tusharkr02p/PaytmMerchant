"use client";

import { useBalance } from "@repo/store";

export default function Page() {
  const balance = useBalance((s) => s.balance);

  return <div>hi there {balance}</div>;
}