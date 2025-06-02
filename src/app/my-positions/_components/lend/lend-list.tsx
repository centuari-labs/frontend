import { AccordionContent } from "@/components/ui/accordion";
import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";
import { DataTable } from "./data-table";

export function LendList() {
  return (
    <AccordionItem
      value="item-2"
      className="!border px-5 py-2 rounded-xl bg-[#043363]/20"
    >
      <AccordionTrigger className="text-start">
        <div>
          <h1 className="text-lg font-bold">Lend</h1>
          <p className="text-xs font-light">1 Position</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t pt-4">
        <DataTable />
      </AccordionContent>
    </AccordionItem>
  );
}
