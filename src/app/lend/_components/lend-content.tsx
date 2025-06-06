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
  CircleAlert,
  LayoutDashboard,
  List,
  MoreHorizontal,
  SearchIcon,
} from "lucide-react";
import { motion } from "motion/react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lendColumns } from "./lend-column-table";
import { LendData } from "./data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export function LendContent() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [searchColumn, setSearchColumn] = React.useState("tokenName");
  const [searchValue, setSearchValue] = React.useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const table = useReactTable({
    data: LendData,
    columns: lendColumns,
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

  const filteredCardData = React.useMemo(() => {
    if (!debouncedSearchValue) return LendData;

    return LendData.filter((item) => {
      const searchLower = debouncedSearchValue.toLowerCase();
      const tokenMatch = item.token.toLowerCase().includes(searchLower);
      const tokenNameMatch = item.tokenName.toLowerCase().includes(searchLower);

      if (searchColumn === "tokenName") {
        return tokenNameMatch;
      }
      if (searchColumn === "token") {
        return tokenMatch;
      }
      return tokenMatch || tokenNameMatch;
    });
  }, [debouncedSearchValue, searchColumn]);

  const handleReset = () => {
    setSearchValue("");
    setSearchColumn("tokenName");
    table.getColumn("token")?.setFilterValue("");
  };

  return (
    <div className="w-full px-6">
      <Tabs defaultValue="table" className="!bg-background rounded-full">
        <div className="flex items-center gap-2 mb-4 w-full">
          <div className="flex items-center gap-2 relative w-full">
            <SearchIcon className="w-4 h-4 absolute left-4" />
            <Input
              className="rounded-full px-10 !bg-background !py-5"
              placeholder={`Search by ${
                searchColumn === "tokenName" ? "token name" : "token symbol"
              }...`}
              value={searchValue}
              onChange={(event) => {
                const newValue = event.target.value;
                setSearchValue(newValue);
                table.getColumn("token")?.setFilterValue(newValue);
              }}
            />
          </div>
          <Select value={searchColumn} onValueChange={setSearchColumn}>
            <SelectTrigger className="w-[180px] rounded-full !bg-background !py-5">
              <SelectValue placeholder="Search by" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Search by</SelectLabel>
                <SelectItem value="tokenName">Token Name</SelectItem>
                <SelectItem value="token">Symbol</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <TabsList className="rounded-full !bg-background !text-white border !py-5">
            <TabsTrigger
              value="table"
              className="rounded-full data-[state=active]:!bg-gradient-to-t data-[state=active]:from-[#0C63BA] data-[state=active]:to-[#043363] data-[state=active]:text-white !py-4"
              onClick={handleReset}
            >
              <List />
            </TabsTrigger>
            <TabsTrigger
              value="card"
              className="rounded-full data-[state=active]:!bg-gradient-to-t data-[state=active]:from-[#0C63BA] data-[state=active]:to-[#043363] data-[state=active]:text-white !py-4"
              onClick={handleReset}
            >
              <LayoutDashboard />
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="table">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Table className="w-full border-separate border-spacing-y-1">
              <TableHeader className="w-full rounded-2xl">
                {table.getHeaderGroups().map((headerGroup) => (
                  <motion.tr
                    key={headerGroup.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
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
                  </motion.tr>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row, index) => (
                    <motion.tr
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className={`transition-colors hover:bg-[#1c2436] ${
                        row.index % 2 === 0 ? "bg-[#03111f]" : "bg-[#1c2436]/50"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
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
                    </motion.tr>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={lendColumns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-end space-x-2 py-4"
          >
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
          </motion.div>
        </TabsContent>
        <TabsContent value="card">
          {filteredCardData.length > 0 ? (
            <motion.div
              className="grid grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredCardData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-[#03111f] hover:bg-[#03111f]/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Image
                          src={item.tokenIcon}
                          alt={item.token}
                          width={32}
                          height={32}
                        />
                        <div className="flex flex-col">
                          <p className="text-lg text-foreground font-bold">
                            {item.tokenName}
                          </p>
                          <p className="text-xs text-muted-foreground font-semibold">
                            {item.token}
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div className="flex flex-col w-full gap-2">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm text-foreground">Lend APY</p>
                          <p className="text-sm text-muted-foreground">
                            {item.apy}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm text-foreground">Supplied</p>
                          <p className="text-sm text-muted-foreground">
                            {item.supplied}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm text-foreground">Borrowed</p>
                          <p className="text-sm text-muted-foreground">
                            {item.borrowed}
                          </p>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm text-foreground">LTV</p>
                          <p className="text-sm text-green-500 font-bold">
                            {item.lltv}%
                          </p>
                        </div>
                        <Progress
                          value={Number(item.lltv)}
                          className="w-full mt-2"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/market/${item.token}?type=lend`}
                        className="w-full"
                      >
                        <Button variant="colorful" className="w-full">
                          View Market
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center w-full min-h-[400px] rounded-xl"
            >
              <CircleAlert
                className="w-16 h-16 text-muted-foreground"
                strokeWidth={1.5}
              />
              <h3 className="mt-4 text-xl font-semibold text-muted-foreground">
                No tokens found
              </h3>
              <p className="text-sm text-muted-foreground">
                Try adjusting your search criteria
              </p>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
