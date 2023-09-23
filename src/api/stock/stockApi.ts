import { requestRestApi } from '@/utils/requestApi';
import { urlBasicStock } from '@/config/url';

export const getStockListApi = async () => {
  const data = await requestRestApi({ url: urlBasicStock });
  return data;
};

export const getStockDetailInfoApi = async (code: string) => {
  const data = await requestRestApi({
    url: `${urlBasicStock}/${code}`,
  });
  return data;
};
