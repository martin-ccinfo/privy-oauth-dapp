"use client";
import React from "react";
import { useWallets } from "@privy-io/react-auth";

const WalletCard = () => {
  const { wallets } = useWallets();


    
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className="p-4 md:p-10">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          Wallet
        </h3>
        
        <pre className="text-[10px] overflow-scroll">{JSON.stringify(wallets, null, 4)}</pre>
      </div>
    </div>
  );
};

export default WalletCard;
