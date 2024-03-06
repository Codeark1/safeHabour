import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    customerFullName: null,
    customerAddress: null,
    customerEmail: null,
    createdAt: null
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            reducer(state, action) {
                const { customerFullName, customerAddress, customerEmail } = action.payload;
                state.customerFullName = customerFullName;
                state.customerAddress = customerAddress;
                state.customerEmail = customerEmail;
                state.createdAt = new Date().toISOString(); // Example: Setting createdAt to current time
            },
            prepare(customerFullName, customerAddress, customerEmail) {
                return {
                    payload: {
                        customerFullName,
                        customerAddress,
                        customerEmail
                    }
                };
            }
        }
    }
});

export const { createCustomer } = customerSlice.actions;
export default customerSlice.reducer;

// const customerReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "createCustomer":
//             return {
//                 ...state,
//                 customerFullName: action.payload.customerFullName,
//                 customerAddress: action.payload.customerAddress,
//                 customerEmail: action.payload.customerEmail,
//                 createdAt: action.payload.createdAt
//             };
//         case "updateCustomer":
//             return {
//                 ...state,
//                 customerFullName: action.payload
//             };
//         default:
//             return state;
//     }
// };

// // Action creators
// function createCustomer(customerFullName, customerEmail, customerAddress) {
//     return {
//         type: "createCustomer",
//         payload: {
//             customerFullName,
//             customerEmail,
//             customerAddress,
//             createdAt: new Date().toISOString()
//         }
//     };
// }

// function updateCustomer(customerFullName) {
//     return {
//         type: "updateCustomer",
//         payload: customerFullName
//     };
// }

// export { createCustomer, updateCustomer };
// export default customerslice;
