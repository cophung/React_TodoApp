import { combineReducers } from "redux";

import { alert } from "./alert.reducer";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";

export const rootReducer = combineReducers({
  alert,
  authentication,
  registration,
});
