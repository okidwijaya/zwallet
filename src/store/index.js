import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";

import reducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const enchancers = applyMiddleware(rpm, logger);
export const store = createStore(persistedReducer, enchancers);
export const persistor = persistStore(store)

