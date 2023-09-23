import React, { useCallback } from 'react';
import styles from './StockListBasicItem.module.scss';
import useStockInfoRecoil from '@/hooks-recoil/stock-info/useStockInfoRecoil';
import { DefaultStockType } from '@/config/type';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = DefaultStockType;

const StockListBasicItem = ({ stockcode, stockname }: Props) => {
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

  const handleStockItemClick = () => {
    setStockInfo({ stockcode, stockname });
    replace(`/?${createQueryString('stockcode', stockcode)}`);
  };

  return (
    <button type="button" className={styles.wrap} onClick={handleStockItemClick}>
      <span className={styles.code}>{stockcode}</span>
      <strong className={styles.name}>{stockname}</strong>
    </button>
  );
};

export default StockListBasicItem;
