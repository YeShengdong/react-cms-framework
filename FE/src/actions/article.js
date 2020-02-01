export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ALL_ARTICLES_FAILURE = 'GET_ALL_ARTICLES_FAILURE';
export const SET_ARTICLE_PAGINATION = 'SET_ARTICLE_PAGINATION';

export function getAllArticles() {
  return {
    type: GET_ALL_ARTICLES,
  };
}

export function getAllArticlesSuccess(data) {
  return {
    type: GET_ALL_ARTICLES_SUCCESS,
    data,
  };
}

export const setPagination = (pagination) => ({ type: SET_ARTICLE_PAGINATION, data: pagination });
