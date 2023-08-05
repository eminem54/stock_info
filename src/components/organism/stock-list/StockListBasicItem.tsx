import React, { useCallback } from 'react';
import styles from './StockListBasicItem.module.scss';
import useStockInfoRecoil from '@/hooks-recoil/stock-info/useStockInfoRecoil';
import { DefaultStockType } from '@/config/type';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = DefaultStockType;

const StockListBasicItem = ({ stockCode, stockName }: Props) => {
  const { setStockInfo } = useStockInfoRecoil();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams();
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );
  console.log();

  const handleStockItemClick = () => {
    setStockInfo({ stockCode, stockName });
    replace(`/?${createQueryString('stockcode', stockCode)}`);
  };

  return (
    <button type="button" className={styles.wrap} onClick={handleStockItemClick}>
      <span className={styles.code}>{stockCode}</span>
      <strong className={styles.name}>{stockName}</strong>
    </button>
  );
};

export default StockListBasicItem;
