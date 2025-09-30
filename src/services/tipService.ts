import { appkit } from "./appkit";
import { Tip } from "../models/tip";

export async function sendTip(to: string, amount: number, token: string): Promise<Tip> {
  try {
    const tx = await appkit.sendTransaction({ to, value: amount, token });
    return { to, amount, token, txHash: tx.hash, status: "pending" };
  } catch {
    return { to, amount, token, status: "failed" };
  }
}
