import { GET_NEWS, GET_NEWS_ERROR, GET_NEWS_SUCCESS } from './actionTypes';

const initialState = {
  isLoading: false,
  newsList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_NEWS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_NEWS_SUCCESS: {
      const { newsList } = action.payload;
      return {
        ...state,
        isLoading: false,
        newsList,
      };
    }
    default:
      return state;
  }
};
