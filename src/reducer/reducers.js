import { combineReducers } from 'redux';

import app from ':module_app/reducer';
import news from ':module_news/reducer';

export default combineReducers({
  app,
  news,
});
