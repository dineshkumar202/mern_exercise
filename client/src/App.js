import React from 'react';
import DepositForm from './DepositForm';
import RegisterForm from './RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <h1>MERN Bank App</h1>
      <RegisterForm />
      <hr />
      <DepositForm />
      <ToastContainer />
    </div>
  );
}

export default App;
