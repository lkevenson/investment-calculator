export interface InvestmentInput {
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
  expectedReturn: number;
}

export interface InvestementResult {
  year: number;
  interest: number;
  valueEndOfYear: any;
  annualInvestment: any;
  totalInterest: number;
  totalAmountInvested: any;
}
