import { useSelector } from 'react-redux';
import BalanceDisplay from '../Account/BalanceDisplay';

const Customer = () => {
  // Retrieve customer information from the Redux store
  const customer = useSelector((store) => store.customer.customerFullName);

  return (
    // Customer component container
    <div className='flex justify-between items-center px-4 h-[50px] shadow-lg bg-[#cbd6dc]'>
      {/* Display the customer's name */}
      <div className='font-bold h-10'>
        <p>Welcome {customer}</p>
      </div>
      {/* Display the balance using the BalanceDisplay component */}
      <div>
        <BalanceDisplay />
      </div>
    </div>
  );
};

export default Customer;
