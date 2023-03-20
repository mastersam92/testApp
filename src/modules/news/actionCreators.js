import { GET_NEWS, GET_NEWS_ERROR, GET_NEWS_SUCCESS } from './actionTypes';

export const getNews = () => ({
  type: GET_NEWS,
  payload: {},
});
export const getNewsError = (message, type = 'common') => ({
  type: GET_NEWS_ERROR,
  payload: {
    type,
    message,
  },
});
export const getNewsSuccess = (newsList) => ({
  type: GET_NEWS_SUCCESS,
  payload: {
    newsList,
  },
});
