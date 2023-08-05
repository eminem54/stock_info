import { atom, useRecoilState } from 'recoil';
import { DefaultStockType } from '@/config/type';

const stockInfoState = atom<DefaultStockType>({
  key: 'stockInfo',
  default: { stockCode: '', stockName: '' },
});

const useStockInfoRecoil = () => {
  const [stockInfo, setStockInfo] = useRecoilState(stockInfoState);

  const isSelectedStock = !!stockInfo.stockCode;

  return { isSelectedStock, stockInfo, setStockInfo };
};

export default useStockInfoRecoil;
