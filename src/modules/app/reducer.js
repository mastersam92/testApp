import { INIT_APP, INIT_APP_SUCCESS, INIT_APP_ERROR } from './actionTypes';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case INIT_APP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case INIT_APP_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
