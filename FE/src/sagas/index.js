import {
  all,
} from 'redux-saga/effects';
import articleSaga from './article-saga';

export default function* () {
  yield all([
    ...articleSaga,
  ]);
}
