import { TOGGLE_CHECKBOX } from "./constants";
import { CHANGE_USER_NAME } from "./constants";

export const toggleCheckbox = () => ({
  type: TOGGLE_CHECKBOX,
});

export const changeUserName = (payload) => ({
  type: CHANGE_USER_NAME,
  payload,
});
