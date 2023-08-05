import React from 'react';
import styles from './StockInfoPriceData.module.scss';

const DEMO_DATA: Props = {
  marketCap: 2596,
  capital: 345,
  numberOfListedShares: 68949,
  creditRatio: +4.32,
  grossSales: 2949,
  operatingProfit: -28,
  netIncome: -338,
  distributionStocks: 54318,
  distributionRatio: 78.8,
};

type Props = {
  marketCap: number;
  capital: number;
  numberOfListedShares: number;
  creditRatio: number;
  grossSales: number;
  operatingProfit: number;
  netIncome: number;
  distributionStocks: number;
  distributionRatio: number;
};

const StockInfoFinancialData = () => {
  const {
    marketCap,
    capital,
    numberOfListedShares,
    creditRatio,
    grossSales,
    operatingProfit,
    netIncome,
    distributionStocks,
    distributionRatio,
  } = DEMO_DATA;

  return (
    <div className={styles.wrap}>
      <strong className={styles.category}>재무 지표</strong>
      <div className={styles.item}>
        <span className={styles.item_title}>시가총액</span>
        <span className={styles.item_value}>{marketCap}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>자본금</span>
        <span className={styles.item_value}>{capital}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>신용비율</span>
        <span className={styles.item_value}>{creditRatio}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>매출액</span>
        <span className={styles.item_value}>{grossSales}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>영업이익</span>
        <span className={styles.item_value}>{operatingProfit}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>당기순이익</span>
        <span className={styles.item_value}>{netIncome}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>유통비율</span>
        <span className={styles.item_value}>{distributionRatio}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>유통주식</span>
        <span className={styles.item_value}>{distributionStocks}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>상장주식</span>
        <span className={styles.item_value}>{numberOfListedShares}</span>
      </div>
    </div>
  );
};

export default StockInfoFinancialData;
