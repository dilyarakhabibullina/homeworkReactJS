import {
  GET_DOGS_REQUEST,
  GET_DOGS_SUCCESS,
  GET_DOGS_ERROR,
} from "./constants";

const initialState = {
  dogs: undefined,
  loading: true,
  error: false,
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_DOGS_SUCCESS: {
      return {
        ...state,
        loading: false,
        dogUrl: action.payload,
      };
    }
    case GET_DOGS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
