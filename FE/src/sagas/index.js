import {
  all, fork, takeEvery, call, put,
} from 'redux-saga/effects';
import * as actions from '@src/actions/article';
import { getArticleList } from '@src/services/article';

function* getAllArticles() {
  try {
    const data = yield call(getArticleList);
    yield put(actions.getAllArticlesSuccess(data));
  } catch (error) {
    // todo...
  }
}

function* watchGetAllArticles() {
  yield takeEvery(actions.GET_ALL_ARTICLES, getAllArticles);
}

export default function* () {
  yield all([
    fork(watchGetAllArticles),
  ]);
}
