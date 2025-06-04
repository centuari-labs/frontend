import { ArrowUpDown } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DataProps } from "./data";
import Link from "next/link";

export const lendColumns: ColumnDef<DataProps>[] = [
  {
    accessorKey: "token",
    header: "Token",
    cell: ({ row }) => {
      const token = row.getValue("token");
      const tokenName = row.original.tokenName;
      const tokenIcon = row.original.tokenIcon; // safer & correct way to access full row data

      return (
        <div className="capitalize flex items-center gap-2 w-[150px]">
          <Image src={tokenIcon} alt={String(token)} width={28} height={28} />
          <div className="flex flex-col">
            <p className="font-bold text-default">{String(token)}</p>
            <p className="text-xs text-muted-foreground">{tokenName}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "apy",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lend APY
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("apy")}</div>,
  },
  {
    accessorKey: "supplied",
    header: () => <div>Supplied</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("supplied"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "borrowed",
    header: () => <div>Borrowed</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("borrowed"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "lltv",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          LLTV
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("lltv")}</div>,
  },
  {
    accessorKey: "",
    header: "Action",
    cell: ({ row }) => (
      <Link href={`/market/${row.original.token}?type=lend`}>
        <Button variant={"colorful"}>View Market</Button>
      </Link>
    ),
  },
];
