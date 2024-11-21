"use client";
import { PrivyProvider } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

const solanaConnectors = toSolanaWalletConnectors({
  shouldAutoConnect: true,
});

export default function PrivyProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        embeddedWallets: {
          createOnLogin: "all-users", // 'off', 'users-without-wallets', and 'all-users'
        },
        appearance: {
          // Use 'solana-only' or 'ethereum-and-solana'
          walletChainType: "solana-only",
          logo: "/logos/hype3-full-logo.png",
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
