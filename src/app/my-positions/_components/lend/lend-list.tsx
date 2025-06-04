"use client";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatedAccordionItem } from "../animated-accordion-item";
import { DataTable } from "./data-table";

export function LendList() {
  return (
    <AnimatedAccordionItem value="item-2" index={1}>
      <AccordionTrigger className="text-start">
        <div>
          <h1 className="text-lg font-bold">Lend</h1>
          <p className="text-xs font-light">1 Position</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="border-t pt-4">
        <DataTable />
      </AccordionContent>
    </AnimatedAccordionItem>
  );
}
