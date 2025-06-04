import { Card, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";
import { BorrowDataTable } from "./_components/borrow-data-table";

export const metadata: Metadata = {
  title: "Borrow Market | Centuari Testnet",
  description: "Borrow assets from the market",
};

export default function BorrowPage() {
  return (
    <div className="container mx-auto">
      <Card className="card-colorful px-6 bg-background py-0 pb-4">
        <CardHeader className="border-b !py-6 px-0">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-2xl font-semibold">Borrow Market</h1>
              <p className="text-sm text-muted-foreground">
                Borrow assets from the market
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Supplied</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </div>
            </div>
          </div>
        </CardHeader>
        <div>
          <BorrowDataTable />
        </div>
      </Card>
    </div>
  );
}
