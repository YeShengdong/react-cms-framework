import {
  FETCH_ARTICLES,
} from '../constants/action-types';

export const fetchArticles = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ARTICLES });
  return { data: 'test' };
};
