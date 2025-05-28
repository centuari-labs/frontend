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

export function getConfig() {
  return createConfig({
    chains: [arbitrumSepolia, rise],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [arbitrumSepolia.id]: http(),
      [rise.id]: http(),
    },
  });
}
