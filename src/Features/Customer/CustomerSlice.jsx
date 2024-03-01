const initialState = {
    customerFullName: null,
    customerAddress: null,
    customerEmail: null,
    createdAt: null
};

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "createCustomer":
            return {
                ...state,
                customerFullName: action.payload.customerFullName,
                customerAddress: action.payload.customerAddress,
                customerEmail: action.payload.customerEmail,
                createdAt: action.payload.createdAt
            };
        case "updateCustomer":
            return {
                ...state,
                customerFullName: action.payload
            };
        default:
            return state;
    }
};

// Action creators
function createCustomer(customerFullName, customerEmail, customerAddress) {
    return {
        type: "createCustomer",
        payload: {
            customerFullName,
            customerEmail,
            customerAddress,
            createdAt: new Date().toISOString()
        }
    };
}

function updateCustomer(customerFullName) {
    return {
        type: "updateCustomer",
        payload: customerFullName
    };
}

export { createCustomer, updateCustomer };
export default customerReducer;
