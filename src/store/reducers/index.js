import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth";
import transferReducer from "src/store/reducers/transfer";
import profileUser from "src/store/reducers/user";

const reducers = combineReducers({
  auth: authReducer,
  transfer: transferReducer,
  user : profileUser,
});

// users: userDataReducers,

// logout persit
// storage.removeItem('persist:root');
export default reducers;
