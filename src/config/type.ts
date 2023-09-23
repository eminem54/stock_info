export type DefaultStockType = {
  stockcode: string;
  stockname: string;
};

export type StockDetailInfoType = DefaultStockType & {
  capital?: number;
  listed_stock?: number;
  company_price?: number;
  financial_per?: number;
  financial_eps?: number;
  financial_roe?: number;
  financial_pbr?: number;
  financial_ev?: number;
  financial_bps?: number;
  total_selling?: number;
  profit?: number;
  quarter_profit?: number;
  year_max_price?: number;
  year_max_date?: Date;
  year_max_rate?: number;
  year_min_price?: number;
  year_min_date?: Date;
  year_min_rate?: number;
  market_stock?: number;
  market_stock_rate?: number;
  last_updated?: Date;
  stock_memo?: string;
};
