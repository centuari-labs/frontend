import { Metadata } from "next";
import { BorrowCard } from "./_components/borrow-card";

export const metadata: Metadata = {
  title: "Borrow Market | Centuari Testnet",
  description: "Borrow assets from the market",
};

export default function BorrowPage() {
  return (
    <div className="container mx-auto">
      <BorrowCard />
    </div>
  );
}
