"use client";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedAccordionItem } from "../animated-accordion-item";
import { DataTable } from "./data-table";

export function BorrowList() {
  return (
    <AnimatedAccordionItem value="item-1" index={0}>
      <AccordionTrigger className="text-start">
        <div>
          <h1 className="text-lg font-bold">Borrow</h1>
          <p className="text-xs font-light">1 Position</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t pt-4 px-3">
        <DataTable />
      </AccordionContent>
    </AnimatedAccordionItem>
  );
}
