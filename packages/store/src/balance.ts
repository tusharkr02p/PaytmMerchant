import { create } from "zustand";

type BalanceState = {
  balance: number;
  setBalance: (val: number) => void;
};

export const useBalance = create<BalanceState>((set) => ({
  balance: 0,
  setBalance: (val) => set({ balance: val }),
}));