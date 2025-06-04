import { Metadata } from "next";
import { LendCard } from "./_components/lend-card";

export const metadata: Metadata = {
  title: "Lend Market | Centuari Testnet",
  description: "Lend your assets to earn interest",
};

export default function LendPage() {
  return (
    <div className="container mx-auto">
      <LendCard />
    </div>
  );
}
