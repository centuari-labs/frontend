import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export function FormMarketLend() {
  return (
    <form action="#" className="p-4 flex flex-col gap-4">
      <div>
        <Label className="text-xs text-muted-foreground" htmlFor="supply">
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
      <Button variant={"colorful"} size={"lg"} className="w-full mt-12">
        Place Order
      </Button>
    </form>
  );
}
