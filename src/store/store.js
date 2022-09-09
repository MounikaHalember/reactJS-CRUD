import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import employeeReducer from './reducer.js'
const middleware = [thunk];
const store = createStore(employeeReducer,

composeWithDevTools(applyMiddleware(...middleware))
)
export default store;