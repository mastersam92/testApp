import { all } from 'redux-saga/effects';

import app from ':module_app/sagas';
import news from ':module_news/sagas';

export default function* sagas() {
  yield all(
    [app, news].reduce(
      (allSagas, module_sagas) => allSagas.concat(module_sagas),
      [],
    ),
  );
}
