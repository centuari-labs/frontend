import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Check, CircleUserRound, Copy, Power, Wallet } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useDisconnect } from "wagmi";

export function CustomConnectButton() {
  const [isCopied, setIsCopied] = useState(false);
  const { disconnect, isPending, isSuccess } = useDisconnect();

  const onCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    variant={"outline"}
                    size={"lg"}
                    className="cursor-pointer rounded-full"
                  >
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} type="button">
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    size={"lg"}
                    variant={"outline"}
                    className="cursor-pointer rounded-full"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <Sheet>
                    <SheetTrigger>
                      <Button
                        type="button"
                        size={"lg"}
                        variant={"outline"}
                        className="cursor-pointer rounded-full"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </Button>
                    </SheetTrigger>
                    <SheetContent className="m-5 border shadow-2xl rounded-2xl h-[calc(100vh-50px)]">
                      <SheetHeader className="">
                        <SheetTitle className="font-bold flex items-center justify-between gap-2 border-b pb-4">
                          <div className="flex items-center gap-2">
                            <CircleUserRound className="w-6 h-6" />
                            <div className="flex items-center gap-3">
                              <div>
                                <div className="flex items-center gap-2">
                                  <p className="text-lg">
                                    {account.displayName}
                                  </p>
                                  {isCopied ? (
                                    <Check className="w-4 h-4 cursor-pointer text-green-500" />
                                  ) : (
                                    <Copy
                                      className="w-3 h-3 cursor-pointer"
                                      onClick={() =>
                                        onCopyAddress(account.address)
                                      }
                                    />
                                  )}
                                </div>
                                <p className="text-xs text-gray-500">
                                  {account.displayBalance
                                    ? ` ${account.displayBalance}`
                                    : ""}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant={"outline"}
                              size={"lg"}
                              className="cursor-pointer rounded-full"
                              onClick={() => {
                                disconnect();
                              }}
                            >
                              <Power className="w-3 h-3" />
                            </Button>
                          </div>
                        </SheetTitle>
                        <SheetDescription className="text-xl font-semibold text-foreground mt-4">
                          Welcome to CENTUARI APP!
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
