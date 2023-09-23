import React from 'react';
import styles from './StockInfoPriceData.module.scss';
import { StockDetailInfoType } from '@/config/type';

type Props = {
  stockInfo: StockDetailInfoType;
};

const StockInfoPriceData = ({ stockInfo }: Props) => {
  return (
    <div className={styles.wrap}>
      <strong className={styles.category}>가격 정보</strong>
      <div className={styles.item}>
        <span className={styles.item_title}>250최고</span>
        <span className={styles.item_value}>{stockInfo.year_max_price}123</span>
      </div>
      {/* <div className={styles.item}>
        <span className={styles.item_title}>250최고가일</span>
        <span className={styles.item_value}>{bestPriceDay}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>250최고가대비율</span>
        <span className={styles.item_value}>{bestPriceRatio}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>250최저</span>
        <span className={styles.item_value}>{lowestPrice}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>250최저가일</span>
        <span className={styles.item_value}>{lowestPricecDay}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>250최저가대비율</span>
        <span className={styles.item_value}>{lowestPriceRatio}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>시가</span>
        <span className={styles.item_value}>{startPrice}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>고가</span>
        <span className={styles.item_value}>{highPrice}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>저가</span>
        <span className={styles.item_value}>{lowPrice}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>현재가</span>
        <span className={styles.item_value}>{currentPrice}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>전일대비</span>
        <span className={styles.item_value}>{comparePreviousDay}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>등락율</span>
        <span className={styles.item_value}>{upDownRate}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>거래량</span>
        <span className={styles.item_value}>{volume}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>거래대비</span>
        <span className={styles.item_value}>{volumeRatio}</span>
      </div> */}
    </div>
  );
};

export default StockInfoPriceData;
