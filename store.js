import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import signUpReducer from './reducers/signUpReducer';
import logInReducer from './reducers/logInReducer';
import appReducer from './reducers/appReducer';
import myProfileReducer from './reducers/myProfileReducer';
import myOrdersReducer from './reducers/myOrdersReducer';

const rootReducer = combineReducers({
  app: appReducer,
  signUp: signUpReducer,
  logIn: logInReducer,
  myProfile: myProfileReducer,
  myOrders: myOrdersReducer
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
