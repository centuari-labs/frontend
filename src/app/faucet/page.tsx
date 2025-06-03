import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { TokenSelector } from "./_components/token-selector";
import { TransactionDataTable } from "./_components/transaction-data-table";

export default function FaucetPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <Card className="card-colorful px-6 bg-background">
          <CardHeader className="border-b px-0">
            <div className="flex justify-between w-full">
              <div>
                <h1 className="text-2xl font-semibold">Faucet</h1>
                <p className="text-sm text-muted-foreground">
                  Get free tokens for testing
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
          <TokenSelector />
        </Card>
        <Card className="card-colorful px-6 bg-background">
          <CardHeader className="border-b px-0">
            <h1 className="text-2xl font-semibold">Recent Transactions</h1>
            <p className="text-sm text-muted-foreground">
              View your recent transactions
            </p>
          </CardHeader>
          <CardContent className="px-0">
            <TransactionDataTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
