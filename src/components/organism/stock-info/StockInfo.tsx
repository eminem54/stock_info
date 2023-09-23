import React, { useEffect, useState } from 'react';
import styles from './StockInfo.module.scss';
import StockInfoPriceData from './StockInfoPriceData';
import StockInfoBasicData from './StockInfoBasicData';
import StockInfoValueData from './StockInfoValueData';
import StockInfoFinancialData from './StockInfoFinancialData';
import useStockInfoRecoil from '@/hooks-recoil/stock-info/useStockInfoRecoil';
import StockInfoCompany from './StockInfoCompany';
import StockInfoMyOpinion from './StockInfoMyOpinion';
import useDetailStockInfoRecoil from '@/hooks-recoil/stock-info/useDetailStockInfoRecoil';
import { useSearchParams } from 'next/navigation';
import { getStockDetailInfoApi } from '@/api/stock/stockApi';

const StockInfo = () => {
  const { isSelectedStock, stockInfo, setStockInfo } = useStockInfoRecoil();
  const { detailStockInfo, setDetailStockInfo } = useDetailStockInfoRecoil();
  const searchParams = useSearchParams();
  const [params, setParams] = useState<string>('');

  useEffect(() => {
    setParams(searchParams.get('stockcode') || '005930');

    const stockcodeParams = searchParams.get('stockcode') || '005930';
    getStockDetailInfoApi(stockcodeParams).then((data) => setDetailStockInfo(data));
  }, [getStockDetailInfoApi, stockInfo]);

  return (
    <div className={styles.wrap}>
      <StockInfoBasicData stockBasicInfo={stockInfo} />
      {/* <StockInfoCompany /> */}
      {/* <StockInfoPriceData stockInfo={detailStockInfo} /> */}
      {/* <StockInfoFinancialData /> */}
      {/* <StockInfoValueData /> */}
      <StockInfoMyOpinion />
    </div>
  );

  // return <div className={styles.wrap}>종목을 선택해주세요.</div>;
};

export default StockInfo;
