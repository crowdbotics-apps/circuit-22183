import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard23166178Reducer from '../features/Dashboard23166178/redux/reducers'
import EmailAuth5166176Reducer from '../features/EmailAuth5166176/redux/reducers';
import SignUp29166172Reducer from '../features/SignUp29166172/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard23166178: Dashboard23166178Reducer,
EmailAuth5166176: EmailAuth5166176Reducer,
SignUp29166172: SignUp29166172Reducer,

});