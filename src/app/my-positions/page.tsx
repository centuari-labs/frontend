import { Metadata } from "next";
import { BorrowList } from "./_components/borrow/borrow-list";
import { LendList } from "./_components/lend/lend-list";
import { PositionsCard } from "./_components/positions-card";

export const metadata: Metadata = {
  title: "My Positions | Centuari Testnet",
  description: "View your positions and manage your assets",
};

export default function MyPositions() {
  return (
    <div className="container mx-auto">
      <PositionsCard>
        <BorrowList />
        <LendList />
      </PositionsCard>
    </div>
  );
}
