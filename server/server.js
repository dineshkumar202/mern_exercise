import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import accountsRoute from './routes/accounts.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/depositdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api', accountsRoute);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
