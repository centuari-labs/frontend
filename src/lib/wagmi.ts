import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { defineChain } from "viem";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";

const rise = defineChain({
  id: 11155931,
  name: "RISE Testnet",
  nativeCurrency: { name: "Rise", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://testnet.riselabs.xyz"] },
  },
  blockExplorers: {
    default: {
      name: "Rise Scan",
      url: "https://explorer.testnet.riselabs.xyz",
    },
  },
  testnet: true,
});

export const config = getDefaultConfig({
  appName: "Centuari Testnet App",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "123",
  chains: [
    {
      ...arbitrumSepolia,
      iconUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv1BCz9c0XJqNX7QdhdoP2Te1d5WBlHDNf6E4Ja7ELh2eCVherSXHhraFVvWYK8msubY&usqp=CAU",
    },
    {
      ...rise,
      iconUrl: "https://public.rootdata.com/images/b6/1726504533652.png",
    },
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [arbitrumSepolia.id]: http(),
    [rise.id]: http(),
  },
});
