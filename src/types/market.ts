export interface IMarketDataProps {
  id: string;
  name: string;
  lend_token: string;
  collateral_token: string;
  icon: string;
  lendingAPY: number;
  borrowingAPY: number;
  marketVolume: number;
  ltv: number;
  trending: number;
  fixedRate: boolean;
  collateralFactor: number;
  liquidationThreshold: number;
  liquidationPenalty: number;
  reserveFactor: number;
  oracle: string;
  contractAddress: string;
  description: string;
  lendTokenUrl: string;
  borrowTokenUrl: string;
}

export const marketData: IMarketDataProps[] = [
  {
    id: "1",
    name: "SOL",
    lend_token: "SOL",
    collateral_token: "USDC",
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    lendingAPY: 10,
    borrowingAPY: 10,
    marketVolume: 1000000,
    ltv: 10,
    trending: 10,
    fixedRate: true,
    collateralFactor: 10,
    liquidationThreshold: 10,
    liquidationPenalty: 10,
    reserveFactor: 10,
    oracle:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    contractAddress:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    description:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    lendTokenUrl:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    borrowTokenUrl:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
  },
];
