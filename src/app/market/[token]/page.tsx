"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { TokenCombobox } from "./_components/token-combobox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import MarketChart from "@/components/market-chart";
import OrderBook from "@/components/order-book";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectMultipleCollateral } from "./_components/select-multiple-collateral";
import { TOKEN_DATA } from "@/constants";
import { useSearchParams } from "next/navigation";
import { FormLimitLend } from "./_components/form-limit-lend";
import { FormLimitBorrow } from "./_components/form-limit-borrow";
import { FormMarketLend } from "./_components/form-market-lend";
import { FormMarketBorrow } from "./_components/form-market-borrow";
import { LendDataTable } from "./_components/active-position/lend-data-table";
import { LendOpenOrderTable } from "./_components/open-orders/lend-open-order-table";
import { LendTransactionTable } from "./_components/transaction/lend-transaction-table";
import { BorrowDataTable } from "./_components/active-position/borrow-data-table";
import { BorrowOpenOrderTable } from "./_components/open-orders/borrow-open-order-table";
import { BorrowTransactionTable } from "./_components/transaction/borrow-transaction-table";

export default function MarketDetailPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const isBorrow = type === "borrow";

  return (
    <div className="px-6">
      <div className="flex gap-4 w-full h-[calc(80vh-100px)] overflow-hidden">
        <Card className="card-colorful bg-background w-full flex-3 gap-0 py-0">
          <div className="border-b flex items-center justify-between py-6 px-6">
            <TokenCombobox />
            <div className="flex items-center gap-10">
              <div>
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <h1 className="text-lg font-bold">$100,000 MUSDC</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Supplied</p>
                <h1 className="text-lg font-bold">$100,000 MUSDC</h1>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LLTV</p>
                <h1 className="text-lg font-bold">90%</h1>
              </div>
            </div>
          </div>
          <div className="border-b px-6 w-full flex items-center">
            <div className="flex items-center">
              <div className="flex items-center w-full gap-2">
                <SelectMultipleCollateral
                  options={TOKEN_DATA as any}
                  onValueChange={() => {}}
                  className="w-[180px] border-none !bg-background !ring-0 !active:ring-0 rounded-full"
                  placeholder="All"
                  variant="default"
                  maxCount={3}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="1day" name="duration">
                <SelectTrigger
                  className="w-[180px] border-none !bg-background !ring-0 !active:ring-0 rounded-full"
                  name="duration"
                >
                  <Label
                    className="text-sm text-muted-foreground"
                    htmlFor="duration"
                  >
                    Duration
                  </Label>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectGroup>
                    <SelectItem value="1day">1 day</SelectItem>
                    <SelectItem value="1week">1 week</SelectItem>
                    <SelectItem value="1month">1 month</SelectItem>
                    <SelectItem value="3months">3 Months</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-4 h-full">
            <div className="flex-3">
              <MarketChart />
            </div>
            <div className="flex-1 border-l">
              <div className="flex items-center justify-between p-3 border-b">
                <p className="text-sm text-foreground font-bold">Order Book</p>
                <Select defaultValue="0.0010">
                  <SelectTrigger
                    className="!bg-background rounded-full"
                    name="sol"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-background">
                    <SelectGroup>
                      <SelectItem value="0.0010">0.0010%</SelectItem>
                      <SelectItem value="0.010">0.010%</SelectItem>
                      <SelectItem value="0.10">0.10%</SelectItem>
                      <SelectItem value="1">1%</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <OrderBook />
            </div>
          </div>
        </Card>
        <Card className="card-colorful bg-background w-full flex-1 py-0">
          <Tabs defaultValue="limit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 h-[56px] rounded-none p-0 bg-background border-b">
              <TabsTrigger
                value="limit"
                className="rounded-none dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-background border-r-0 border-b-0 dark:data-[state=active]:font-bold"
              >
                Limit
              </TabsTrigger>
              <TabsTrigger
                value="market"
                className="rounded-none dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-background border-r-0 border-b-0 dark:data-[state=active]:font-bold"
              >
                Market
              </TabsTrigger>
            </TabsList>
            <TabsContent value="limit">
              {isBorrow ? <FormLimitBorrow /> : <FormLimitLend />}
            </TabsContent>
            <TabsContent value="market">
              {isBorrow ? <FormMarketBorrow /> : <FormMarketLend />}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
      <Card className="card-colorful bg-background w-full flex-3 gap-0 py-0 my-4">
        <div className="border-b flex flex-col w-full px-6">
          <Tabs defaultValue="active-position">
            <div className="w-full h-20 border-b flex items-center">
              <TabsList className="flex bg-background">
                <TabsTrigger
                  value="active-position"
                  className="rounded-full py-4 dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-[#043363] dark:data-[state=active]:font-bold"
                >
                  Active Position
                </TabsTrigger>
                <TabsTrigger
                  value="open-orders"
                  className="rounded-full py-4 dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-[#043363] dark:data-[state=active]:font-bold w-[150px]"
                >
                  Open Orders
                </TabsTrigger>
                {/* <TabsTrigger
                  value="order-history"
                  className="rounded-full py-4 dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-[#043363] dark:data-[state=active]:font-bold w-[150px]"
                >
                  Order History
                </TabsTrigger> */}
                <TabsTrigger
                  value="my-transactions"
                  className="rounded-full py-4 dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-[#043363] dark:data-[state=active]:font-bold w-[150px]"
                >
                  My Transactions
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="flex items-center justify-center w-full">
              <TabsContent
                value="active-position"
                className="flex items-center justify-center w-full"
              >
                {isBorrow ? <BorrowDataTable /> : <LendDataTable />}
              </TabsContent>
              <TabsContent
                value="open-orders"
                className="flex items-center justify-center w-full"
              >
                {isBorrow ? <BorrowOpenOrderTable /> : <LendOpenOrderTable />}
              </TabsContent>
              {/* <TabsContent
                value="order-history"
                className="flex items-center justify-center w-full"
              >
                <p>Order History</p>
              </TabsContent> */}
              <TabsContent
                value="my-transactions"
                className="flex items-center justify-center w-full"
              >
                {isBorrow ? (
                  <BorrowTransactionTable />
                ) : (
                  <LendTransactionTable />
                )}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
