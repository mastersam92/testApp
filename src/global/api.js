import { call, select } from 'redux-saga/effects';
import { parseXMLString } from ':global/utils';

import endpoints, { backendUrl } from './endpoints';

export { endpoints, backendUrl };

const apiKeySelector = ({ auth = {} }) => auth.apiToken;

export function* callApi({
  isRespJSON = true,
  isRespXML = false,
  url,
  endpoint,
  method = 'POST',
  payload = {},
  headers,
  token,
}) {
  let apiUrl;

  if (endpoint) {
    apiUrl = `${backendUrl}/${endpoint}`;
  } else if (url) {
    apiUrl = url;
  } else {
    throw new Error('callApi should receive url or endpoint');
  }

  const apiKey = token ? token : yield select(apiKeySelector);

  if (apiKey) {
    payload.token = apiKey;
  }

  const options = {
    method,
    headers: {
      ...headers,
    },
    body: method === 'GET' ? undefined : JSON.stringify(payload),
  };

  if (isRespJSON) {
    options.headers['Content-Type'] = 'application/json';
  }

  console.log(`Request sent to ${apiUrl}`, { options, payload });
  const response = yield call(fetch, apiUrl, options);
  console.log('Raw resp is: ', response);

  let parsedResp;
  try {
    if (isRespJSON) {
      parsedResp = yield call([response, response.json]);
    } else if (isRespXML) {
      parsedResp = yield parseXMLString(yield call([response, response.text]));
    }
  } catch (exception) {
    console.log(`Request executed from ${apiUrl} with failure with:`, {
      parsedResp,
    });
    throw exception;
  }

  if (response.ok) {
    console.log(`Request executed successfully from ${apiUrl}:`, {
      parsedResp,
    });
    return parsedResp;
  }
  console.log(`Request executed from ${apiUrl} with failure:`, { parsedResp });
  throw new Error(parsedResp);

  /*
  if (isRespJSON) {
    let json;
    try {
      json = yield call([response, response.json]);
    } catch (exception) {
      console.log(`Request executed from ${apiUrl} with failure with:`, {
        json,
      });
      throw exception;
    }

    if (response.ok) {
      console.log(`Request executed successfully from ${apiUrl}:`, { json });
      return json;
    }
    console.log(`Request executed from ${apiUrl} with failure:`, { json });
    throw new Error(json);

  } else if( isRespXML ) {

  }
  */
}
