import express from 'express';
import Account from '../models/Account.js';

const router = express.Router();

// POST /api/deposit
router.post('/deposit', async (req, res) => {
  const { accno, amount } = req.body;

  try {
    const account = await Account.findOne({ accno: accno });

    if (!account) return res.status(404).json({ message: 'Account not found' });

    account.balance += amount;
    await account.save();

    res.json({ message: 'Deposit successful', updatedBalance: account.balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/register
router.post('/register', async (req, res) => {
    const { accno, name, balance } = req.body;
  
    try {
      // Check if accno already exists
      const existing = await Account.findOne({ accno });
      if (existing) return res.status(400).json({ message: 'Account number already exists' });
  
      const newAccount = new Account({ accno, name, balance });
      await newAccount.save();
      res.status(201).json({ message: 'Account created successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

export default router;
