import React, { useState } from "react";
import { sendTip } from "../services/tipService";

interface Props {
  creatorAddress: string;
}

export const TipForm: React.FC<Props> = ({ creatorAddress }) => {
  const [amount, setAmount] = useState(0);
  const [token, setToken] = useState("ETH");

  const handleSend = async () => {
    await sendTip(creatorAddress, amount, token);
  };

  return (
    <div>
      <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <select value={token} onChange={(e) => setToken(e.target.value)}>
        <option value="ETH">ETH</option>
        <option value="USDC">USDC</option>
        <option value="DAI">DAI</option>
      </select>
      <button onClick={handleSend}>Send Tip</button>
    </div>
  );
};
