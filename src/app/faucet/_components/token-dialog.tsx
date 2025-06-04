import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaucetDataProps } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useAccount } from "wagmi";

export const TokenDialog = ({
  selectedToken,
}: {
  selectedToken: FaucetDataProps[];
}) => {
  const { address } = useAccount();

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant={"colorful"}>Get Tokens</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Confirm Token Request</DialogTitle>
            <DialogDescription>
              Review your selected tokens and enter your wallet address to
              complete the request.
            </DialogDescription>
          </DialogHeader>
          <div className="border rounded-md p-4 space-y-4">
            <h3 className="text-sm font-bold">You will receive:</h3>
            {selectedToken.map((item) => (
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
                    <Badge variant="secondary">Tesnet</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.claimLimit} {item.tokenName}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <Input
                id="wallet-address"
                name="wallet-address"
                value={address}
                readOnly
              />
            </div>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-3">
            <div className="text-yellow-300 text-sm space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⚠️</span>
                <span className="font-medium">Important:</span>
              </div>
              <ul className="text-xs space-y-1 ml-6">
                <li>• Testnet tokens only - no real value</li>
                <li>• 1 request per hour per address</li>
                <li>• Ensure your wallet supports the selected network</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" variant={"colorful"}>
              Confirm Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
