import { useSelector } from 'react-redux';

// Header component
const Header = () => {
    // Get the loan from the Redux store
    const loan = useSelector(store => store.account.loan);
    console.log(loan); // Log the loan value to the console

    return (
        <div>
            {/* Header section */}
            <section className='flex justify-between h-[10%] shadow-md items-center bg-yellow-400  font-bold'>
                <div>
                    <h1 className=' text-xl px-5'>Welcome to SafeHarbor </h1>
                </div>
                {/* Display loan if it's greater than 0 */}
                <div className=' px-5 font-semibold'>
                    {
                        loan > 0 ? <p>loan {loan}</p> : null
                    }
                </div>
            </section>
        </div>
    );
}

export default Header;
