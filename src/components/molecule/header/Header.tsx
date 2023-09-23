import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.wrap}>
      <h1 className={styles.title}>Stock Info</h1>
      <div className={styles.content}>
        <span>기본 정보</span>
        <span>달력</span>
      </div>
    </header>
  );
};

export default Header;
