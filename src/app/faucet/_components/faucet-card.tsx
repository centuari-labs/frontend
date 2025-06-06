"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import { TokenSelector } from "./token-selector";

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

export function FaucetCard() {
  return (
    <motion.div {...fadeInUp}>
      <Card className="card-colorful px-6 bg-background">
        <CardHeader className="border-b px-0">
          <div className="flex justify-between w-full">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h1 className="text-2xl font-semibold">Faucet</h1>
              <p className="text-sm text-muted-foreground">
                Get free tokens for testing
              </p>
            </motion.div>
            <div className="flex items-center gap-10">
              <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
                <p className="text-sm text-muted-foreground">Borrowed</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </motion.div>
              <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
                <p className="text-sm text-muted-foreground">Supplied</p>
                <h1 className="text-xl font-bold">$100,000 MUSDC</h1>
              </motion.div>
            </div>
          </div>
        </CardHeader>
        <motion.div {...fadeIn} transition={{ delay: 0.5 }}>
          <TokenSelector />
        </motion.div>
      </Card>
    </motion.div>
  );
}
