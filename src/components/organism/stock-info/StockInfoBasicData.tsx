import React from 'react';
import styles from './StockInfoBasicData.module.scss';
import { DefaultStockType } from '@/config/type';

const DEMO_DATA = {
  stockName: '다날',
  stockCode: '062460',
  settlementMonth: 12,
};

type Props = {
  stockBasicInfo: DefaultStockType;
};

const StockInfoBasicData = ({ stockBasicInfo }: Props) => {
  return (
    <div className={styles.wrap}>
      <button>
        <strong className={styles.name}>{stockBasicInfo.stockname}</strong>
        <span className={styles.code}>{stockBasicInfo.stockcode}</span>
      </button>
      <span className={styles.settlement}>결산: 월</span>
    </div>
  );
};

export default StockInfoBasicData;
