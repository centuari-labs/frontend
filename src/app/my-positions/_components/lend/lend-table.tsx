"use client";

import { motion } from "motion/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockData = [
  {
    id: 1,
    token: "MUSDC",
    tokenName: "Mock USDC",
    supplied: "$100,000",
    apy: "3.5%",
    utilization: "80%",
  },
];

export function LendTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Token</TableHead>
            <TableHead>Supplied</TableHead>
            <TableHead>APY</TableHead>
            <TableHead>Utilization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((row, index) => (
            <motion.tr
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <TableCell className="font-medium">{row.token}</TableCell>
              <TableCell>{row.supplied}</TableCell>
              <TableCell>{row.apy}</TableCell>
              <TableCell>{row.utilization}</TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
