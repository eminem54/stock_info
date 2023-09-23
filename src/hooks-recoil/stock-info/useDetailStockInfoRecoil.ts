import { atom, useRecoilState, selector } from 'recoil';
import { StockDetailInfoType } from '@/config/type';
import { stockInfoState } from './useStockInfoRecoil';

const stockDetailInfoState = atom<StockDetailInfoType>({
  key: 'stockDetailInfo',
  default: { stockcode: '', stockname: '' },
});

const useDetailStockInfoRecoil = () => {
  const [detailStockInfo, setDetailStockInfo] = useRecoilState(stockDetailInfoState);

  return { detailStockInfo, setDetailStockInfo };
};

export default useDetailStockInfoRecoil;
