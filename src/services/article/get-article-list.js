import { get } from 'lodash';
import apiClient from '../../lib/api-client';

const getArticleList = async (data) => {
  const res = await apiClient.get({
    url: 'article/list',
    data,
  });
  const dataInfo = get(res, 'data', {});

  return dataInfo;
};

export default getArticleList;
