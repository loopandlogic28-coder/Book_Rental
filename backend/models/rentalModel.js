import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'food', // keep consistent with your food model name
    required: true
  },
  quantity: { type: Number, required: true, default: 1 },
  name: { type: String, required: true }, // renter name snapshot
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  deliveredDate: { type: Date }, // set by admin when delivered
  returnedDate: { type: Date }, // admin sets when returned
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['order_placed','out_for_delivery','delivered','returned','cancelled'],
    default: 'order_placed'
  },
  cancelledBy: { type: String }, // 'user' or 'admin'
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Rental', rentalSchema);
