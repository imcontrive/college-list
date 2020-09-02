import { createStore, combineReducers } from "redux";
import mainReducer from "./reducer";

const rootReducers = combineReducers({
  mainReducer
});
const store = createStore(rootReducers);

export default store;
