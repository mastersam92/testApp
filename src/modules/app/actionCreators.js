import { INIT_APP, INIT_APP_ERROR, INIT_APP_SUCCESS } from './actionTypes';

export const initApp = () => ({
  type: INIT_APP,
  payload: {},
});
export const initAppError = (message, type = 'common') => ({
  type: INIT_APP_ERROR,
  payload: {
    type,
    message,
  },
});
export const initAppSuccess = () => ({
  type: INIT_APP_SUCCESS,
  payload: {},
});
