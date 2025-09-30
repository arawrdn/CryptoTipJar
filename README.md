# CryptoTipJar
A simple “tip jar” dApp that allows content creators to receive crypto tips from users via WalletConnect. Users can tip in ETH or stablecoins, and the creator can track received tips.
# CryptoTipJar

---

## Features

- Connect wallet via WalletConnect
- Send tips to content creators in ETH, USDC, or DAI
- Track tips with transaction hash and status
- Minimal and clean React + TypeScript setup

---

## Tech Stack

- **React** – Frontend UI  
- **TypeScript** – Type safety  
- **AppKit (`@reown/appkit`)** – Wallet connection & blockchain interaction  
- **AppKit Adapter Ethers5 (`@reown/appkit-adapter-ethers5`)** – Ethers.js v5 integration  
- **WalletConnect** – Connect any compatible wallet  

---

## Setup & Installation

1. Clone the repo:

```bash
git clone https://github.com/arawrdn/cryptotipjar.git
cd cryptotipjar
