import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/provider";
import { Navbar } from "@/components/navbar";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin", "latin-ext"],
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
      <body
        className={`${urbanist.variable} antialiased bg-background min-h-screen font-sans`}
      >
        <Provider>
          <Navbar />
          <main className="relative">
            <div className="relative text-blue-100 w-full">{children}</div>
            <div className="absolute w-1/3 left-0 bottom-0 h-1/3 rounded-full bg-gradient-to-r from-[#0C63BA] to-[#043363] blur-[300px] -z-10"></div>
            <div className="absolute w-1/3 right-0 -top-24 h-1/3 rounded-full bg-gradient-to-r from-[#0C63BA] to-[#043363] blur-[300px] -z-10"></div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
