import React from 'react';
import styles from './StockInfoCompany.module.scss';

const StockInfoCompany = () => {
  return (
    <div className={styles.wrap}>
      <strong className={styles.title}>회사 정보</strong>
      <div contentEditable suppressContentEditableWarning={true} className={styles.edit_box}>
        기본 회사 정보임 타이핑하고 몇 초간 있으면 자동 저장에, 포커스 잃어버릴 때도 저장하고
        싶은데..
      </div>
    </div>
  );
};

export default StockInfoCompany;
