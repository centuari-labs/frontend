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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const mockHistory = [
  {
    id: "1",
    token: "SOL",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501572",
    amount: "0.1",
    status: "completed",
    timestamp: "10:00 AM",
    hash: "0x1234...5678",
  },
  {
    id: "2",
    token: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    amount: "100",
    status: "completed",
    timestamp: "10:00 AM",
    hash: "0x2345...6789",
  },
  {
    id: "3",
    token: "USDT",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501215",
    amount: "100",
    status: "pending",
    timestamp: "10:00 AM",
    hash: "0x3456...7890",
  },
  {
    id: "4",
    token: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    amount: "100",
    status: "completed",
    timestamp: "10:00 AM",
    hash: "0x4567...8901",
  },
];

export type DataProps = {
  id: string;
  token: string;
  tokenIcon: string;
  amount: string;
  status: string;
  timestamp: string;
  hash: string;
};

export const columns: ColumnDef<DataProps>[] = [
  {
    accessorKey: "token",
    header: "Token",
    cell: ({ row }) => {
      const token = row.getValue("token");
      const tokenIcon = row.original.tokenIcon; // safer & correct way to access full row data

      return (
        <div className="capitalize flex items-center gap-2">
          <Image src={tokenIcon} alt={String(token)} width={28} height={28} />
          <div className="flex flex-col">
            <p className="font-bold text-default">{String(token)}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "hash",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hash
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("hash")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div>Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <Badge
          variant={status === "completed" ? "success" : "destructive"}
          className="text-xs"
        >
          {status === "completed" ? "Success" : "Pending"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Time
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("timestamp")}</div>
    ),
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <Link href={`/market/${row.original.token}?type=borrow`}>
        <Button variant={"colorful"}>View Transaction</Button>
      </Link>
    ),
  },
];

export function TransactionDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data: mockHistory,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    filterFns: {
      customSearch: (row, columnId, filterValue) => {
        const searchValue = String(filterValue).toLowerCase();
        const token = String(row.getValue("token")).toLowerCase();
        const tokenName = String(row.original.tokenName).toLowerCase();

        return token.includes(searchValue) || tokenName.includes(searchValue);
      },
    },
    globalFilterFn: "customSearch" as any,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-2 relative w-full">
          <SearchIcon className="w-4 h-4 absolute left-4" />
          <Input
            className="rounded-full px-10 !bg-background"
            placeholder="Search by token or token name..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
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
                      className="py-6 px-8 first:rounded-l-sm last:rounded-r-sm"
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
