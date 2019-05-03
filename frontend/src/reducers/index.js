import {combineReducers} from 'redux';
import membersReducer from "./membersReducer";

const rootReducer = combineReducers({
  membersReducer
});

export default rootReducer;