import React from 'react';
import styles from './StockInfoBasicData.module.scss';

const DEMO_DATA = {
  stockName: '다날',
  stockCode: '062460',
  settlementMonth: 12,
};

const StockInfoBasicData = () => {
  const { stockName, stockCode, settlementMonth } = DEMO_DATA;

  return (
    <div className={styles.wrap}>
      <button>
        <strong className={styles.name}>{stockName}</strong>
        <span className={styles.code}>{stockCode}</span>
      </button>
      <span className={styles.settlement}>결산: {settlementMonth}월</span>
    </div>
  );
};

export default StockInfoBasicData;
