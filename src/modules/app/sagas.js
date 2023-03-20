import { put, spawn } from 'redux-saga/effects';

import { getNews } from ':module_news/actionCreators';

import * as actions from './actionCreators';

function* init() {
  try {
    yield put(getNews());

    yield put(actions.initAppSuccess());
  } catch (err) {
    yield put(actions.initAppError(err.message));
  }
}

export default [spawn(init)];
