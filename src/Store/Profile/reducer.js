import { CHANGE_USER_NAME, TOGGLE_CHECKBOX } from "./constants";

const initialCheckboxState = {
  isChecked: false,
  name1: "the hunter",
};
console.log(initialCheckboxState);

export const checkboxReducer = (state1 = initialCheckboxState, action) => {
  switch (action.type) {
    case TOGGLE_CHECKBOX: {
      return {
        ...state1,
        isChecked: !state1.isChecked,
      };
    }
    case CHANGE_USER_NAME: {
      return {
        ...state1,
        userName: action.payload.userName,
      };
    }
    default:
      return state1;
  }
};
