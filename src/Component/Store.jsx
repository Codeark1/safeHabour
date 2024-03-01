import { createStore, combineReducers, applyMiddleware } from "redux";
import customerReducer from "../Features/Customer/CustomerSlice";
import accountReducer from "../Features/Account/AccountSlice";
import { thunk } from "redux-thunk";// Correct import for redux-thunk

// Combine reducers
const rootReducer = combineReducers({
    customer: customerReducer,
    account: accountReducer
});

// Create Redux store with thunk middleware applied
const store = createStore(rootReducer, applyMiddleware(thunk));

// Dispatch any initial actions if needed

// Export the store
export default store;
