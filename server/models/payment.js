const mongoose = require('mongoose');
const Stripe = require('stripe');

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  paymentIntentId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

paymentSchema.statics.createPaymentIntent = async function(
  orderId,
  amount,
  currency
) {
  // Initialize Stripe client with your secret key
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    metadata: {
      order_id: orderId,
    },
  });

  // Return the paymentIntent client secret
  return paymentIntent.client_secret;
};

module.exports = mongoose.model('Payment', paymentSchema);
