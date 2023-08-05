import React from 'react';
import styles from './StockInfoValueData.module.scss';

const DEMO_DATA = {
  per: 0,
  eps: -222,
  roe: -4.6,
  pbr: 0.78,
  ev: 47.24,
  bps: 4802,
};

const StockInfoValueData = () => {
  const { per, eps, roe, pbr, ev, bps } = DEMO_DATA;
  return (
    <div className={styles.wrap}>
      <strong className={styles.category}>투자 지표</strong>
      <div className={styles.item}>
        <span className={styles.item_title}>PER</span>
        <span className={styles.item_value}>{per}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>EPS</span>
        <span className={styles.item_value}>{eps}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>ROE</span>
        <span className={styles.item_value}>{roe}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>PBR</span>
        <span className={styles.item_value}>{pbr}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>EV</span>
        <span className={styles.item_value}>{ev}</span>
      </div>
      <div className={styles.item}>
        <span className={styles.item_title}>BPS</span>
        <span className={styles.item_value}>{bps}</span>
      </div>
    </div>
  );
};

export default StockInfoValueData;
