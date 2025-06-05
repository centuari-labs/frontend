"use client";

import { motion } from "motion/react";
import { AccordionItem } from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

interface AnimatedAccordionItemProps {
  value: string;
  children: React.ReactNode;
  index: number;
}

export function AnimatedAccordionItem({
  value,
  children,
  index,
}: AnimatedAccordionItemProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <AccordionItem
        value={value}
        className="!border px-5 py-2 rounded-xl bg-[#043363]/20"
      >
        {children}
      </AccordionItem>
    </motion.div>
  );
}
