import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
const middleware = [thunk];

export const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        rootReducer,
        compose(
          applyMiddleware(...middleware),

          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      )
    : createStore(rootReducer, compose(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
export default { store, persistor };
