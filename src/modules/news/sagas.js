import { put, takeLatest } from 'redux-saga/effects';

import { callApi, endpoints } from ':global/api';

import { GET_NEWS } from './actionTypes';
import * as actions from './actionCreators';

function* getNews() {
  try {
    const rssNewsList = yield callApi({
      isRespXML: true,
      isRespJSON: false,
      // Обычно параметры авторизации callApi берёт из модуля авторизации, но в демке его нет
      token: 'dumb-auth-token',
      // Большинство запросов POST, поэтому он по умолчанию
      method: 'GET',
      endpoint: endpoints.getNews,
      payload: {},
    });

    const newsList = rssNewsList.rss.channel[0].item.map((item) => ({
      title: item.title[0],
      description: item.description[0].replace(/(\<a.*?a>)|(\<.*?>)/g, ''),
      // Для демонстрации добавлено изображение
      image:
        'https://russian.rt.com/static/blocks/touch-icon/apple-touch-icon-144x144-precomposed.png',
      uri: item.link[0],
    }));

    yield put(actions.getNewsSuccess(newsList));
  } catch (err) {
    console.log(err);
    yield put(actions.getNewsError(err.message));
  }
}

export default [takeLatest(GET_NEWS, getNews)];
