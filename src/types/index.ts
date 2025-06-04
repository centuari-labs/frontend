export interface FaucetDataProps {
  id: string;
  name: string;
  tokenName: string;
  chain: string;
  chainId: number;
  tokenIcons: string;
  address: string;
  limitTime: string;
  limitTimeUnit: string;
  status: string;
  explorer: string;
  faucetUrl: string;
  claimLimit: number;
}

export interface OpenOrdersProps {
  loan_token_decimal: number;
  loan_token_symbol: string;
  loan_token_address: `0x${string}`;
  collateral_token_address: `0x${string}`;
  matched_amount: string;
  original_amount: string;
  rate: string;
  side: "LEND" | "BORROW";
  status: "PARTIALLY_FILLED" | "OPEN";
  timestamp: string;
  orderId: bigint;
  maturity: bigint;
}

export interface TransactionProps {
  id: number;
  token: string;
  tokenName: string;
  tokenIcon: string;
  supplied: number;
  lltv: string;
  borrowed: number;
  timestamp: string;
  side: "LEND" | "BORROW";
  txHash: string;
}
