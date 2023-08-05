import React from 'react';
import styles from './StockInfo.module.scss';
import StockInfoPriceData from './StockInfoPriceData';
import StockInfoBasicData from './StockInfoBasicData';
import StockInfoValueData from './StockInfoValueData';
import StockInfoFinancialData from './StockInfoFinancialData';
import useStockInfoRecoil from '@/hooks-recoil/stock-info/useStockInfoRecoil';
import StockInfoCompany from './StockInfoCompany';
import StockInfoMyOpinion from './StockInfoMyOpinion';

const StockInfo = () => {
  const { isSelectedStock } = useStockInfoRecoil();

  if (isSelectedStock) {
    return (
      <div className={styles.wrap}>
        <StockInfoBasicData />
        <StockInfoCompany />
        <StockInfoPriceData />
        <StockInfoFinancialData />
        <StockInfoValueData />
        <StockInfoMyOpinion />
      </div>
    );
  }

  return <div className={styles.wrap}>종목을 선택해주세요.</div>;
};

export default StockInfo;
