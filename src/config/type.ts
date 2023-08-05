export type DefaultStockType = {
  stockCode: string;
  stockName: string;
};

export type StockInfoProps = DefaultStockType & {
  marketCap: string;
  //...
};
