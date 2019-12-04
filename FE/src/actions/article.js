import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_ARTICLE_PAGINATION,
} from '@src/constants/action-types';
import { getArticleList } from '@src/services/article';

const fetchSuccess = (res) => ({
  type: FETCH_ARTICLES_SUCCESS,
  data: res,
});

export const fetchArticles = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_ARTICLES });

  try {
    const res = await getArticleList();
    dispatch(fetchSuccess(res));
  } catch (error) {
    dispatch({ type: FETCH_ARTICLES_FAILURE });
  }
};

export const setPagination = (pagination) => ({ type: SET_ARTICLE_PAGINATION, data: pagination });
