// Initial state for the account reducer
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    loading: ""
};

// Redux reducer for managing account-related actions
const accountreducer = (state = initialState, action) => {
    switch (action.type) {
        case "deposite":
            // Update balance and set loading to false after depositing
            return {
                ...state,
                balance: state.balance + action.payload,
                loading: false
            };
        case "withdrawal":
            // Update balance and set loading to false after withdrawal
            return {
                ...state,
                balance: state.balance - action.payload,
                loading: false
            };
        case "getLoan":
            // Update loan amount and purpose, set loading to false if loan amount is 0
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.loanPurpose,
                loading: false
            };
        case "payloan":
            // Update loan amount, clear loan purpose, set loading to false after paying loan
            return {
                ...state,
                loanPurpose: "",
                loan: state.loan - action.payload,
                loading: false
            };
        case "isLoading":
            // Set loading to true
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};

// Action creator for depositing money into the account
function deposite(amount, currency) {
    // If currency is USD, create a simple deposit action
    if (currency === "USD") {
        return {
            type: "deposite",
            payload: amount
        };
    }
    // If currency is not USD, asynchronously convert and dispatch a deposit action with the converted amount
    return async function name(dispatch, getState) { 
        dispatch({ type: "isLoading" }); // Set loading to true
        const host = 'api.frankfurter.app';
        const res = await fetch(`https://${host}/latest?amount=${amount}&from=${currency}&to=USD`);
        const data = await res.json();
        const convertedAmount = data.rates.USD; // Convert currency
        dispatch({ type: "deposite", payload: convertedAmount }); // Dispatch deposit action with converted amount
    };
}

// Other action creators for withdrawing money, getting a loan, and paying a loan
function withdrawal(amount) {
    return {
        type: "withdrawal",
        payload: amount
    };
}

function getLoan(amount, loanPurpose) {
    return {
        type: "getLoan",
        payload: { amount, loanPurpose }
    };
}

function payLoan(payloan) {
    return {
        type: "payloan",
        payload: payloan
    };
}

export { deposite, withdrawal, getLoan, payLoan }; // Exporting action creators
export default accountreducer; // Exporting account reducer
