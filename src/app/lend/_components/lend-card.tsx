"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import { LendContent } from "./lend-content";

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

export function LendCard() {
  return (
    <motion.div {...fadeInUp}>
      <Card className="bg-background py-0 pb-4 h-[calc(100vh-100px)] overflow-y-auto relative">
        <CardHeader className="border-b card-colorful !py-6 sticky top-0 z-10 bg-background/50 backdrop-blur-sm">
          <div className="flex justify-between w-full">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h1 className="text-2xl font-semibold">Lend Market</h1>
              <p className="text-sm text-muted-foreground">
                Lend your assets to earn interest
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
          <LendContent />
        </motion.div>
      </Card>
    </motion.div>
  );
}
