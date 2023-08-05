import React from 'react';
import styles from './HomePage.module.scss';
import Header from '@/components/molecule/header/Header';
import StockListBasic from '@/components/organism/stock-list/StockListBasic';
import StockInfo from '@/components/organism/stock-info/StockInfo';

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <Header />
      <div className={styles.layout}>
        <StockListBasic />
        <StockInfo />
      </div>
    </div>
  );
};

export default HomePage;
