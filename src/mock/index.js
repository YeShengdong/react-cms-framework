/* eslint-disable prefer-template */
import Mock from 'mockjs';
import { articleListData } from './data';

function enableMock({ baseURL, timeout }) {
  console.log('Mocking:', baseURL);
  Mock.setup({
    timeout,
  });

  Mock.mock(baseURL + 'article/list', articleListData);
}

export default enableMock;
