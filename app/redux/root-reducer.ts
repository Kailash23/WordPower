import {combineReducers} from 'redux';
import authReducer from './slices/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
