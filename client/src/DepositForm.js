import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const DepositForm = () => {
  const [accno, setAccno] = useState('');
  const [amount, setAmount] = useState('');

  const handleDeposit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/deposit', {
        accno: parseInt(accno),
        amount: parseFloat(amount)
      });
      toast.success(response.data.message + `. New Balance: ₹${response.data.updatedBalance}`);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Deposit failed');
    }
  };

  return (
    <div>
      <h2>Deposit Form</h2>
      <input type="number" placeholder="Account Number" value={accno} onChange={e => setAccno(e.target.value)} />
      <input type="number" placeholder="Amount to Deposit" value={amount} onChange={e => setAmount(e.target.value)} />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default DepositForm;
