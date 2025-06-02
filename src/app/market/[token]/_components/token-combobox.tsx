"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TOKEN_DATA } from "@/constants";
import Image from "next/image";

export function TokenCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] h-12 text-lg rounded-full justify-between !bg-background"
        >
          <div className="flex items-center gap-2">
            <Image
              src={
                TOKEN_DATA.find((data) => data.value === value)?.icon ||
                TOKEN_DATA[0]?.icon
              }
              alt={TOKEN_DATA.find((data) => data.value === value)?.label || ""}
              width={20}
              height={20}
            />
            {value
              ? TOKEN_DATA.find((data) => data.value === value)?.label
              : TOKEN_DATA[0]?.label}
          </div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="bg-background">
          <CommandInput placeholder="Search token..." />
          <CommandList>
            <CommandEmpty>No token found.</CommandEmpty>
            <CommandGroup>
              <div className="flex items-center justify-between my-2 px-1">
                <p className="text-sm text-foreground font-bold">Token</p>
                <p className="text-sm text-foreground font-bold">APY</p>
              </div>
              {TOKEN_DATA.map((data) => (
                <CommandItem
                  key={data.value}
                  value={data.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Image
                        src={data.icon}
                        alt={data.label}
                        width={20}
                        height={20}
                      />
                      <p className="text-sm text-foreground">{data.label}</p>
                    </div>
                    <p className="text-sm text-foreground">10%</p>
                  </div>
                  {/* <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  /> */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
