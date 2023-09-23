import React, { useEffect, useState } from 'react';
import styles from './StockListBasic.module.scss';
import StockListBasicItem from './StockListBasicItem';
import { DefaultStockType } from '@/config/type';
import { getStockListApi } from '@/api/stock/stockApi';

const DEMO_DATA = {
  stockList: [
    {
      stockCode: '064260',
      stockName: '다날',
    },
    {
      stockCode: '039980',
      stockName: '리노스',
    },
    {
      stockCode: '052790',
      stockName: '액토즈소프트',
    },
    {
      stockCode: '023350',
      stockName: '한국종합기술',
    },
    {
      stockCode: '046970',
      stockName: '우리로',
    },
  ],
};

type Props = {
  stockList: DefaultStockType[];
};

const StockListBasic = () => {
  const [stockList, setStockList] = useState<DefaultStockType[]>([]);

  useEffect(() => {
    getStockListApi().then((data) => {
      setStockList(data);
    });
  }, [getStockListApi]);

  return (
    <div className={styles.wrap}>
      {stockList.map(({ stockcode, stockname }, idx) => (
        <StockListBasicItem
          key={`basic-stock-item-${idx}`}
          stockcode={stockcode}
          stockname={stockname}
        />
      ))}
    </div>
  );
};

export default StockListBasic;
