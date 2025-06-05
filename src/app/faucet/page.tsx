import { Metadata } from "next";
import { FaucetCard } from "./_components/faucet-card";
import { TransactionCard } from "./_components/transaction-card";

export const metadata: Metadata = {
  title: "Faucet | Centuari Testnet",
  description: "Get free tokens for testing",
};

export default function FaucetPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <FaucetCard />
        <TransactionCard />
      </div>
    </div>
  );
}
