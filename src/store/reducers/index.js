import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth";
import transferReducer from "src/store/reducers/transfer";
import profileUser from "src/store/reducers/user";

const reducers = combineReducers({
  auth: authReducer,
  transfer: transferReducer,
  user: profileUser,
});

// users: userDataReducers,

// logout persit
// storage.removeItem('persist:root');
export default reducers;

// const rootReducer = (state, action) => {
//   if (action.type === SIGNOUT_REQUEST) {
//       // for all keys defined in your persistConfig(s)
//       storage.removeItem('persist:root')
//       // storage.removeItem('persist:otherKey')

//       return appReducer(undefined, action);
//   }
//   return appReducer(state, action);
// };
