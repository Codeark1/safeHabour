
import customerReducer from "../Features/Customer/CustomerSlice";
import accountReducer from "../Features/Account/AccountSlice";
import { configureStore } from "@reduxjs/toolkit";

const store =  configureStore({
    reducer :{
        customer: customerReducer,
        account: accountReducer
    }
})





// Export the store
export default store;
 