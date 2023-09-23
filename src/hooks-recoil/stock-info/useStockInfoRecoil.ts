import { atom, useRecoilState } from 'recoil';
import { DefaultStockType } from '@/config/type';

export const stockInfoState = atom<DefaultStockType>({
  key: 'stockInfo',
  default: { stockcode: '', stockname: '' },
});

const useStockInfoRecoil = () => {
  const [stockInfo, setStockInfo] = useRecoilState(stockInfoState);

  const isSelectedStock = !!stockInfo.stockcode;

  return { isSelectedStock, stockInfo, setStockInfo };
};

export default useStockInfoRecoil;
