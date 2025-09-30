export interface Tip {
  to: string;
  amount: number;
  token: string;
  txHash?: string;
  status: "pending" | "confirmed" | "failed";
}
