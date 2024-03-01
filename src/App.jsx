import React from "react";
import Customer from "./Features/Customer/Customer";
import Header from "./Component/Header";
import {  useSelector } from "react-redux";
import Login from "./Features/Customer/Login";
import AccountOperations from "./Features/Account/AccountOperations";


const App = () => {
  const user = useSelector((store)=>store.customer)
 
  return (
 
  <div>
      <Header />

  {user.customerFullName ?
  <>
  <Customer/> 
  <AccountOperations/>
  </>
  
  : <Login /> }


</div>
  );
};

export default App;
