"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { motion } from "motion/react";
import { Accordion } from "@/components/ui/accordion";

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

interface AnimatedPositionsCardProps {
  children: React.ReactNode;
}

export function AnimatedPositionsCard({
  children,
}: AnimatedPositionsCardProps) {
  return (
    <motion.div {...fadeInUp}>
      <Card className="card-colorful px-6 bg-background py-0 mb-4 min-h-[calc(100vh-100px)]">
        <CardHeader className="border-b !py-6 px-0">
          <div className="flex justify-between w-full">
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <h1 className="text-2xl font-semibold">My Positions</h1>
              <p className="text-sm text-muted-foreground">
                View your positions and manage your assets
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
          <Accordion type="multiple" className="mb-4 flex flex-col gap-2">
            {children}
          </Accordion>
        </motion.div>
      </Card>
    </motion.div>
  );
}
