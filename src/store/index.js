import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";

import reducers from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enchancers = applyMiddleware(rpm, logger);
export const store = createStore(persistedReducer, enchancers);
export const persistor = persistStore(store);

// const rootReducer = (state, action) => {
//   if (action.type === SIGNOUT_REQUEST) {
//       // for all keys defined in your persistConfig(s)
//       storage.removeItem('persist:root')
//       // storage.removeItem('persist:otherKey')

//       return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };
