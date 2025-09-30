import React from "react";
import { WalletConnectButton } from "../components/WalletConnectButton";
import { TipForm } from "../components/TipForm";

const creatorAddress = "0x2A6b5204B83C7619c90c4EB6b5365AA0b7d912F7";

export const HomePage = () => {
  return (
    <div>
      <h1>CryptoTipJar</h1>
      <WalletConnectButton />
      <TipForm creatorAddress={creatorAddress} />
    </div>
  );
};
