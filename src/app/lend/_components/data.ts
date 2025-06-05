export type DataProps = {
  id: number;
  token: string;
  tokenName: string;
  tokenIcon: string;
  supplied: number;
  lltv: string;
  borrowed: number;
  apy: string;
  volume: number;
};

export const LendData: DataProps[] = [
  {
    id: 1,
    token: "SOL",
    tokenName: "Solana",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    supplied: 100,
    lltv: "90",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 2,
    token: "USDC",
    tokenName: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 3,
    token: "USDT",
    tokenName: "USDT",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501580",
    supplied: 100,
    lltv: "90",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
  {
    id: 4,
    token: "USDC",
    tokenName: "USDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90",
    borrowed: 100,
    apy: "10%",
    volume: 100,
  },
];
