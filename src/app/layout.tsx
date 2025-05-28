import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centuari Testnet App",
  description:
    "Centuari is a Central Limit Order Book (CLOB) powered lending platform that aims to bring the best of both Traditional Finance (TradFi) and decentralization technology. Our platform powers fixed-rate loans – delivering stable, predictable yields for both lenders and borrowers – and provide tailored and advanced financial solutions through our curator-managed vaults and uncollateralized lending products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
