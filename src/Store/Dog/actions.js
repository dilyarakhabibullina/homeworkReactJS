import {
  GET_DOGS_ERROR,
  GET_DOGS_REQUEST,
  GET_DOGS_SUCCESS,
} from "./constants";

export const getDogRequestAction = () => ({
  type: GET_DOGS_REQUEST,
});

export const getDogSuccessAction = (dogUrl) => ({
  type: GET_DOGS_SUCCESS,
  payload: dogUrl,
});

export const getDogErrorAction = () => ({
  type: GET_DOGS_ERROR,
});

export const getDogActionWithThunk = () => async (dispatch, getState) => {
  dispatch(getDogRequestAction());
  // };

  // setError(false);
  // setLoading(true);
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error(`error getting data`);
    }
    const result = await response.json();
    //setDog(result.message);
    dispatch(getDogSuccessAction(result.message));
  } catch (error) {
    dispatch(getDogErrorAction());
  }
};
