"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import { TransactionDataTable } from "./transaction-data-table";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export function TransactionCard() {
  return (
    <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
      <Card className="card-colorful px-6 bg-background">
        <CardHeader className="border-b px-0">
          <motion.div {...fadeIn} transition={{ delay: 0.6 }}>
            <h1 className="text-2xl font-semibold">Recent Transactions</h1>
            <p className="text-sm text-muted-foreground">
              View your recent transactions
            </p>
          </motion.div>
        </CardHeader>
        <CardContent className="px-0">
          <motion.div {...fadeIn} transition={{ delay: 0.7 }}>
            <TransactionDataTable />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
