import React from 'react';
import styles from './StockListBasic.module.scss';
import StockListBasicItem from './StockListBasicItem';
import { DefaultStockType } from '@/config/type';

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
  const { stockList } = DEMO_DATA;

  return (
    <div className={styles.wrap}>
      {stockList.map(({ stockCode, stockName }, idx) => (
        <StockListBasicItem
          key={`basic-stock-item-${idx}`}
          stockCode={stockCode}
          stockName={stockName}
        />
      ))}
    </div>
  );
};

export default StockListBasic;
