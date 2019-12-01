import {
  FETCH_ARTICLES,
} from '../constants/action-types';

const initialState = {
  list: [],
  conditions: {
    text: '',
    searchBy: '',
    sortBy: '',
    sortOrder: 'desc',
  },
  searchBys: [
    {
      name: 'TITLE',
      value: 'title',
    },
    {
      name: 'GENRE',
      value: 'genres',
    },
  ],
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
    case FETCH_ARTICLES:
      console.log('FETCH_ARTICLES');
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default article;
