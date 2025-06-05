"use client";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionList } from "../accordion-list";
import { DataTable } from "./data-table";
import { Badge } from "@/components/ui/badge";

export function BorrowList() {
  return (
    <AccordionList value="item-1" index={0}>
      <AccordionTrigger className="text-start hover:no-underline">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">Borrow</h1>
          <Badge
            className="bg-gradient-to-r from-[#0C63BA] to-[#043363] text-white font-bold border-0"
            variant={"default"}
          >
            1 Position
          </Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t pt-4 px-3">
        <DataTable />
      </AccordionContent>
    </AccordionList>
  );
}
