import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema({
  accno: { type: Number, unique: true, required: true },
  name: { type: String, required: true },
  balance: { type: Number, required: true }
});

export default mongoose.model('Account', accountSchema);
