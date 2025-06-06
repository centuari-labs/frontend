import { FaucetDataProps, OpenOrdersProps, TransactionProps } from "@/types";

export const TOKEN_DATA = [
  {
    label: "SOL",
    value: "sol",
    icon: "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
  },
  {
    label: "USDC",
    value: "usdc",
    icon: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
  },
  {
    label: "USDT",
    value: "usdt",
    icon: "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
  },
  {
    label: "BTC",
    value: "btc",
    icon: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  },
  {
    label: "ETH",
    value: "eth",
    icon: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  },
] as const;

export const faucetData: FaucetDataProps[] = [
  {
    id: "usdc",
    name: "USDC Faucet",
    tokenName: "USDC",
    chain: "Sepolia",
    chainId: 5,
    tokenIcons:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    explorer: "https://sepholia.etherscan.io",
    faucetUrl: "https://faucet.example.com/wbtc",
    claimLimit: 1000000,
    address: "0x0000000000000000000000000000000000000000",
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
  {
    id: "weth",
    name: "WETH Faucet",
    tokenName: "WETH",
    chain: "Sepolia",
    address: "0x0000000000000000000000000000000000000000",
    chainId: 5,
    tokenIcons:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    explorer: "https://goerli.etherscan.io",
    faucetUrl: "https://faucet.example.com/bgb",
    claimLimit: 1000000,
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
  {
    id: "wbtc",
    name: "WBTC Faucet",
    tokenName: "WBTC",
    address: "0x0000000000000000000000000000000000000000",
    chain: "Sepolia",
    chainId: 5,
    tokenIcons:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    explorer: "https://goerli.etherscan.io",
    faucetUrl: "https://stargatefaucet.xyz",
    claimLimit: 1000000,
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
  {
    id: "sol",
    name: "Solana Faucet",
    tokenName: "SOL",
    chain: "Goerli",
    address: "0x0000000000000000000000000000000000000000",
    chainId: 5,
    tokenIcons:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696501566",
    explorer: "https://goerli.etherscan.io",
    faucetUrl: "https://faucet.example.com/bnb",
    claimLimit: 1000000,
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
  {
    id: "link",
    name: "LINK Faucet",
    tokenName: "LINK",
    chain: "Goerli",
    address: "0x0000000000000000000000000000000000000000",
    chainId: 5,
    tokenIcons:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    explorer: "https://goerli.etherscan.io",
    faucetUrl: "https://faucet.example.com/link",
    claimLimit: 1000000,
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
  {
    id: "aave",
    name: "AAVE Faucet",
    tokenName: "AAVE",
    chain: "Goerli",
    chainId: 5,
    address: "0x0000000000000000000000000000000000000000",
    tokenIcons:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    explorer: "https://goerli.etherscan.io",
    faucetUrl: "https://faucet.example.com/link",
    claimLimit: 1000000,
    limitTime: "30",
    limitTimeUnit: "minutes",
    status: "active",
  },
];

export const OpenOrdersData: OpenOrdersProps[] = [
  {
    loan_token_decimal: 18,
    loan_token_symbol: "MUSDC",
    loan_token_address: "0x0000000000000000000000000000000000000000",
    collateral_token_address: "0x0000000000000000000000000000000000000000",
    matched_amount: "1000000000000000000",
    original_amount: "1000000000000000000",
    rate: "1000000000000000000",
    side: "LEND",
    status: "OPEN",
    timestamp: "2021-01-01",
    orderId: BigInt(1),
    maturity: BigInt(1),
  },
  {
    loan_token_decimal: 18,
    loan_token_symbol: "MUSDC",
    loan_token_address: "0x0000000000000000000000000000000000000000",
    collateral_token_address: "0x0000000000000000000000000000000000000000",
    matched_amount: "1000000000000000000",
    original_amount: "1000000000000000000",
    rate: "1000000000000000000",
    side: "BORROW",
    status: "OPEN",
    timestamp: "2021-01-01",
    orderId: BigInt(2),
    maturity: BigInt(2),
  },
  {
    loan_token_decimal: 18,
    loan_token_symbol: "MUSDC",
    loan_token_address: "0x0000000000000000000000000000000000000000",
    collateral_token_address: "0x0000000000000000000000000000000000000000",
    matched_amount: "1000000000000000000",
    original_amount: "1000000000000000000",
    rate: "1000000000000000000",
    side: "LEND",
    status: "PARTIALLY_FILLED",
    timestamp: "2021-01-01",
    orderId: BigInt(3),
    maturity: BigInt(3),
  },
];

export const TransactionData: TransactionProps[] = [
  {
    id: 1,
    token: "MUSDC",
    tokenName: "MUSDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    timestamp: "2021-01-01",
    side: "LEND",
    txHash: "0x1234567890",
  },
  {
    id: 2,
    token: "MUSDC",
    tokenName: "MUSDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    timestamp: "2021-01-01",
    side: "LEND",
    txHash: "0x1234567890",
  },
  {
    id: 3,
    token: "MUSDC",
    tokenName: "MUSDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    timestamp: "2021-01-01",
    side: "LEND",
    txHash: "0x1234567890",
  },
  {
    id: 4,
    token: "MUSDC",
    tokenName: "MUSDC",
    tokenIcon:
      "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042194",
    supplied: 100,
    lltv: "90%",
    borrowed: 100,
    timestamp: "2021-01-01",
    side: "BORROW",
    txHash: "0x1234567890",
  },
];
