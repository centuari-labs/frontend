"use client";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AccordionList } from "../accordion-list";
import { DataTable } from "./data-table";
import { Badge } from "@/components/ui/badge";

export function LendList() {
  return (
    <AccordionList value="item-2" index={1}>
      <AccordionTrigger className="text-start hover:no-underline">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">Lend</h1>
          <Badge
            className="bg-gradient-to-r from-[#0C63BA] to-[#043363] text-white font-bold border-0"
            variant={"default"}
          >
            1 Position
          </Badge>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t pt-4">
        <DataTable />
      </AccordionContent>
    </AccordionList>
  );
}
