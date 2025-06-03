"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { faucetData } from "@/constants";
import { Wallet, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";
import { TokenDialog } from "./token-dialog";
import { FaucetDataProps } from "@/types";

export function TokenSelector() {
  const [selectedToken, setSelectedToken] = useState<FaucetDataProps[]>([]);
  const handleSelectToken = (token: any) => {
    if (selectedToken.includes(token)) {
      setSelectedToken(selectedToken.filter((id) => id !== token));
    } else {
      setSelectedToken([...selectedToken, token]);
    }
  };
  const handleCancel = () => {
    setSelectedToken([]);
  };

  const handleAddAddress = async (
    e: React.MouseEvent<HTMLButtonElement>,
    token: any
  ) => {
    e.stopPropagation();
    if (!window.ethereum) {
      alert("Wallet not found");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
          },
        },
      });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  console.log("selectedToken", selectedToken);

  return (
    <div>
      {selectedToken.length > 0 && (
        <div className="border mb-4 rounded-lg bg-gradient-to-r from-[#043363]/10 to-[#043363]/20">
          <div className="flex justify-between items-center p-4">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-foreground">
                Selected Tokens{" "}
                <Badge variant="secondary" className="ml-2">
                  {selectedToken.length}
                </Badge>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="destructive" onClick={handleCancel}>
                Cancel
              </Button>
              <TokenDialog selectedToken={selectedToken} />
              {/* <Button variant={"colorful"}>Get Tokens</Button> */}
            </div>
          </div>
        </div>
      )}
      <CardContent className="grid grid-cols-4 gap-4 px-0">
        {faucetData.map((item) => (
          <Card
            key={item.id}
            className={`bg-background cursor-pointer transition-all duration-300 relative ${
              selectedToken.some((token) => token.id === item.id)
                ? "bg-[#043363]/20 border-2"
                : ""
            }`}
            onClick={() => handleSelectToken(item)}
          >
            <div className="flex flex-col gap-2 px-4">
              <div>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.tokenIcons}
                    alt={item.tokenName}
                    width={32}
                    height={32}
                  />
                  <div className="w-full">
                    <div className="flex justify-between w-full items-center gap-2">
                      <p className="text-default text-foreground font-bold">
                        {item.name}
                      </p>
                      <Wallet
                        className="w-4 h-4"
                        onClick={(e: any) => handleAddAddress(e, item)}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {item.tokenName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {selectedToken.some((token) => token.id === item.id) && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </Card>
        ))}
      </CardContent>
    </div>
  );
}
