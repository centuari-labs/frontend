"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { TokenCombobox } from "./_components/token-combobox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import MarketChart from "@/components/market-chart";
import OrderBook from "@/components/order-book";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MarketDetailPage({
  params,
}: {
  params: { token: string };
}) {
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
          <div className="border-b flex px-6 items-center gap-2">
            <div className="flex items-center gap-2">
              <Select defaultValue="sol" name="sol">
                <SelectTrigger
                  className="w-[180px] border-none !bg-background !ring-0 !active:ring-0 rounded-full"
                  name="sol"
                >
                  <Label
                    className="text-sm text-muted-foreground"
                    htmlFor="sol"
                  >
                    Collateral
                  </Label>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background">
                  <SelectGroup>
                    <SelectItem value="sol">SOL</SelectItem>
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
              <form action="#">
                <div className="p-4">
                  <Label
                    className="text-xs text-muted-foreground"
                    htmlFor="supply"
                  >
                    Your Supply
                  </Label>
                  <div className="flex items-center mt-2 relative">
                    <Select defaultValue="sol" name="sol">
                      <SelectTrigger
                        className="w-[150px] rounded-r-none border-r-0 !bg-background"
                        name="sol"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="!bg-background ">
                        <SelectGroup>
                          <SelectItem value="sol">SOL</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input
                      id="supply"
                      placeholder="0.00"
                      className="rounded-l-none !bg-background"
                    />
                    <Button
                      className="rounded-l-none absolute w-10 h-5 top-0 right-0 text-xs rounded-tr-md rounded-br-none rounded-bl-md"
                      variant={"colorful"}
                      size={"sm"}
                      onClick={() => {
                        console.log("max");
                      }}
                    >
                      Max
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Label
                    className="text-xs text-muted-foreground"
                    htmlFor="collateral"
                  >
                    Your Collateral
                  </Label>
                  <div className="flex items-center mt-2 relative">
                    <Select defaultValue="sol" name="sol">
                      <SelectTrigger
                        className="w-full !bg-background"
                        name="sol"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="!bg-background ">
                        <SelectGroup>
                          <SelectItem value="sol">SOL</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="p-4">
                  <Label
                    className="text-xs text-muted-foreground"
                    htmlFor="apy"
                  >
                    Target APY
                  </Label>
                  <div className="flex items-center mt-2">
                    <Select defaultValue="1day" name="apy">
                      <SelectTrigger
                        className="w-[150px] rounded-r-none border-r-0 !bg-background"
                        name="apy"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="!bg-background ">
                        <SelectGroup>
                          <SelectItem value="1day">1 day</SelectItem>
                          <SelectItem value="1week">1 week</SelectItem>
                          <SelectItem value="1month">1 month</SelectItem>
                          <SelectItem value="3months">3 months</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input
                      id="supply"
                      placeholder="0.00"
                      className="rounded-l-none !bg-background text-lg"
                    />
                  </div>
                  <Button
                    variant={"colorful"}
                    size={"lg"}
                    className="w-full mt-12"
                  >
                    Place Order
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="market">
              <form action="#">
                <div className="p-4">
                  <Label
                    className="text-xs text-muted-foreground"
                    htmlFor="supply"
                  >
                    Your Supply
                  </Label>
                  <div className="flex items-center mt-2 relative">
                    <Select defaultValue="sol" name="sol">
                      <SelectTrigger
                        className="w-[150px] rounded-r-none border-r-0 !bg-background"
                        name="sol"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="!bg-background ">
                        <SelectGroup>
                          <SelectItem value="sol">SOL</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Input
                      id="supply"
                      placeholder="0.00"
                      className="rounded-l-none !bg-background"
                    />
                    <Button
                      className="rounded-l-none absolute w-10 h-5 top-0 right-0 text-xs rounded-tr-md rounded-br-none rounded-bl-md"
                      variant={"colorful"}
                      size={"sm"}
                      onClick={() => {
                        console.log("max");
                      }}
                    >
                      Max
                    </Button>
                  </div>
                  <Button
                    variant={"colorful"}
                    size={"lg"}
                    className="w-full mt-12"
                  >
                    Place Order
                  </Button>
                </div>
              </form>
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
                <TabsTrigger
                  value="order-history"
                  className="rounded-full py-4 dark:data-[state=active]:bg-gradient-to-b dark:data-[state=active]:from-[#043363] dark:data-[state=active]:to-[#043363] dark:data-[state=active]:font-bold w-[150px]"
                >
                  Order History
                </TabsTrigger>
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
                className="h-[500px] flex items-center justify-center w-full"
              >
                <p>Active Position</p>
              </TabsContent>
              <TabsContent
                value="open-orders"
                className="h-[500px] flex items-center justify-center w-full"
              >
                <p>Open Orders</p>
              </TabsContent>
              <TabsContent
                value="order-history"
                className="h-[500px] flex items-center justify-center w-full"
              >
                <p>Order History</p>
              </TabsContent>
              <TabsContent
                value="my-transactions"
                className="h-[500px] flex items-center justify-center w-full"
              >
                <p>My Transactions</p>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
