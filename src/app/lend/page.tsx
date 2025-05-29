import { DataTableDemo } from "@/components/data-table";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lend Market | Centuari Testnet",
  description: "Lend your assets to earn interest",
};

export default function LendPage() {
  return (
    <div className="container mx-auto">
      <Card className="card-colorful px-6 bg-background py-0 pb-4">
        <div className="border-b h-24 flex items-center">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-2xl font-semibold">Lend Market</h1>
              <p className="text-sm text-muted-foreground">
                Lend your assets to earn interest
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <h1 className="text-2xl font-bold">$100,000 MUSDC</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Supplied</p>
                <h1 className="text-2xl font-bold">$100,000 MUSDC</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <DataTableDemo />
        </div>
      </Card>
    </div>
  );
}
