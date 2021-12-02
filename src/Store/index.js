import { createStore } from "redux";
import { checkboxReducer } from "./Profile/reducer";

export const storeCheckbox = createStore(
  checkboxReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
