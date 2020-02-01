/* eslint-disable object-shorthand */
import Mock from 'mockjs';

Mock.Random.extend({
  articleTags: function () {
    const data = ['最新', '已过期', '未发布', '已发布'];
    return this.pick(data);
  },
});

const articleListData = {
  'list|10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    title: '@title',
    content: '@paragraph',
    author: '@name',
    email: '@email',
    'tags|1-3': ['@ARTICLETAGS'],
    date: '@datetime',
  }],
  total: 22,
};

export default articleListData;
