import {
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ALL_ARTICLES_FAILURE,
  SET_ARTICLE_PAGINATION,
} from '@src/actions/article';

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
    case GET_ALL_ARTICLES: {
      console.log('GET_ALL_ARTICLES');
      return { ...state, loading: true };
    }
    case GET_ALL_ARTICLES_SUCCESS: {
      console.log('GET_ALL_ARTICLES_SUCCESS');
      const { data: { list, total } } = action;
      const pagination = { ...state.pagination, total };
      return {
        ...state,
        list,
        pagination,
        loading: false,
      };
    }
    case GET_ALL_ARTICLES_FAILURE: {
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
