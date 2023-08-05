import React from 'react';
import styles from './StockInfoMyOpinion.module.scss';

const StockInfoMyOpinion = () => {
  return (
    <div className={styles.wrap}>
      <div contentEditable suppressContentEditableWarning={true}>
        내가 적는 개인적인 의견 wddwdwd sdasdas dwd wd wd wd wd w
      </div>
    </div>
  );
};

export default StockInfoMyOpinion;
