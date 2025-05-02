import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegisterForm = () => {
  const [accno, setAccno] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        accno: parseInt(accno),
        name,
        balance: parseFloat(balance)
      });
      toast.success(response.data.message);
      setAccno('');
      setName('');
      setBalance('');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div>
      <h2>Register New Account</h2>
      <input type="number" placeholder="Account Number" value={accno} onChange={e => setAccno(e.target.value)} />
      <input type="text" placeholder="Account Holder Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Initial Balance" value={balance} onChange={e => setBalance(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
