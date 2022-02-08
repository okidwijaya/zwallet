import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth";

const reducers = combineReducers({
  auth: authReducer,
});

// users: userDataReducers,

// logout persit
// storage.removeItem('persist:root');
export default reducers;
