# CryptoTipJar
A simple “tip jar” dApp that allows content creators to receive crypto tips from users via WalletConnect. Users can tip in ETH or stablecoins, and the creator can track received tips.

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

2. Install dependencies:
npm install

3. Start the development server:
npm start

4. Open http://localhost:3000
 in your browser

Usage

1. Click Connect Wallet to connect your wallet via WalletConnect.

2. Enter the tip amount and select the token.

3. Click Send Tip to send crypto to the creator.

4. The transaction status will be tracked (pending, confirmed, failed).
