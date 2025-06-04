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
import { OpenOrdersData, TransactionData } from "@/constants";
import { OpenOrdersProps, TransactionProps } from "@/types";
import { Badge } from "@/components/ui/badge";

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

export const columns: ColumnDef<TransactionProps>[] = [
  {
    accessorKey: "token",
    header: "Token",
    cell: ({ row }) => {
      return (
        <p className="font-bold text-default">{String(row.original.token)}</p>
      );
    },
  },
  {
    accessorKey: "supplied",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Supplied
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("supplied")}</div>
    ),
  },
  {
    accessorKey: "lltv",
    header: () => <div>LLTV</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("lltv"));

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
    accessorKey: "side",
    header: () => <div>Side</div>,
    cell: ({ row }) => (
      <Badge variant="secondary" className="capitalize">
        {row.getValue("side")}
      </Badge>
    ),
  },
  {
    accessorKey: "txHash",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:dark:bg-transparent cursor-pointer !px-0"
          //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tx Hash
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Link
        href={`https://etherscan.io/tx/${row.getValue("txHash")}`}
        target="_blank"
      >
        {row.getValue("txHash")}
      </Link>
    ),
  },
];

export function LendTransactionTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchColumn, setSearchColumn] = React.useState("token");

  const table = useReactTable({
    data: TransactionData.filter((order) => order.side === "LEND"),
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
