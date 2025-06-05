import { ArrowUpDown } from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DataProps } from "./data";
import Link from "next/link";

export const borrowColumns: ColumnDef<DataProps>[] = [
  {
    id: "token",
    accessorFn: (row) => ({
      token: row.token,
      tokenName: row.tokenName,
      tokenIcon: row.tokenIcon,
    }),
    header: "Token",
    cell: ({ row }) => {
      const data = row.getValue("token") as {
        token: string;
        tokenName: string;
        tokenIcon: string;
      };

      return (
        <div className="capitalize flex items-center gap-2 w-[150px]">
          <Image src={data.tokenIcon} alt={data.token} width={28} height={28} />
          <div className="flex flex-col">
            <p className="font-bold text-default">{data.token}</p>
            <p className="text-xs text-muted-foreground">{data.tokenName}</p>
          </div>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      const data = row.getValue(id) as { token: string; tokenName: string };
      return (
        data.token.toLowerCase().includes(value.toLowerCase()) ||
        data.tokenName.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
  {
    accessorKey: "tokenName",
    header: "Token Name",
    cell: ({ row }) => row.getValue("tokenName"),
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
          Borrow APY
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
      <Link href={`/market/${row.original.token}?type=borrow`}>
        <Button variant={"colorful"}>View Market</Button>
      </Link>
    ),
  },
];
