import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  SET_ARTICLE_PAGINATION,
} from '@src/constants/action-types';

const initialState = {
  list: [],
  pagination: {
    current: 1,
    total: 0,
    pageSize: 10,
  },
  conditions: {
    text: '',
    sortBy: '',
    sortOrder: 'desc',
  },
  sortBys: [
    {
      name: 'release date',
      value: 'release_date',
    },
    {
      name: 'rating',
      value: 'vote_average',
    },
  ],
  detail: {},
  relateList: [],
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES: {
      console.log('FETCH_ARTICLES');
      return { ...state, loading: true };
    }
    case FETCH_ARTICLES_SUCCESS: {
      console.log('FETCH_ARTICLES_SUCCESS');
      const { data: { list, total } } = action;
      const pagination = { ...state.pagination, total };
      return {
        ...state,
        list,
        pagination,
        loading: false,
      };
    }
    case FETCH_ARTICLES_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_ARTICLE_PAGINATION: {
      console.log('SET_ARTICLE_PAGINATION');
      const pagination = { ...state.pagination, ...action.data };

      return {
        ...state,
        pagination,
      };
    }
    default: {
      return state;
    }
  }
};

export default article;
