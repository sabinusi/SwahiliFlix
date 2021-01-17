import { combineReducers } from "redux";
import SharedState from "./shared";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sharedState"],
};
const rootReducer = combineReducers({
  sharedState: SharedState,
});

export default persistReducer(persistConfig, rootReducer);
