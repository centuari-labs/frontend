"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  LayoutDashboard,
  List,
  MoreHorizontal,
  SearchIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const LendData: any = [
  {
    id: 1,
    token: "SOL",
    tokenName: "Solana",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 2,
    token: "USDC",
    tokenName: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 3,
    token: "USDT",
    tokenName: "USDT",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501580",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 4,
    token: "USDC",
    tokenName: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
];

export type DataProps = {
  id: number;
  token: string;
  tokenName: string;
  tokenIcon: string;
  supplied: number;
  lltv: string;
  borrowed: number;
  apy: string;
  volume: number;
};

export const columns: ColumnDef<DataProps>[] = [
  {
    accessorKey: "token",
    header: "Token",
    cell: ({ row }) => {
      const token = row.getValue("token");
      const tokenName = row.original.tokenName;
      const tokenIcon = row.original.tokenIcon; // safer & correct way to access full row data

      return (
        <div className="capitalize flex items-center gap-2">
          <Image src={tokenIcon} alt={String(token)} width={24} height={24} />
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
    header: () => <div>Amount</div>,
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
    header: () => <div>Amount</div>,
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
];

export function LendDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchColumn, setSearchColumn] = React.useState("token");

  const table = useReactTable({
    data: LendData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 my-4">
        <div className="flex items-center gap-2 relative w-full">
          <SearchIcon className="w-4 h-4 absolute left-4" />
          <Input
            className="rounded-full px-10 !bg-background"
            placeholder={`Search by ${searchColumn}...`}
            value={
              (table.getColumn(searchColumn)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(searchColumn)?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>
      <div className="rounded-md">
        <Table className="w-full border-separate border-spacing-y-1">
          <TableHeader className="w-full rounded-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="bg-gradient-to-t from-[#0C63BA]/20 to-[#043363]/50 first:rounded-tl-2xl last:rounded-tr-2xl py-2 px-8 font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={`transition-colors hover:bg-[#1c2436] ${
                    row.index % 2 === 0 ? "bg-[#03111f]" : "bg-[#1c2436]/50"
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="py-2 px-8 first:rounded-l-sm last:rounded-r-sm"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
