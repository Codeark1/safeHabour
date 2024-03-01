import React from 'react';
import { useSelector } from 'react-redux';

const BalanceDisplay = () => {
    const account = useSelector((store) => store.account);
    const balance = account.balance.toFixed(2); // Ensure balance is displayed with two decimal places

    const balanceClass = balance < 50 ? 'bg-red-500 text-white' : 'bg-green-800 text-white';

    return (
        <div className={`p-2 font-bold ${balanceClass}`}>
            Your Balance is $ {balance}
        </div>
    );
};

export default BalanceDisplay;
