const mongoose = require('mongoose');

// Import the Payment model
const Payment = require('../models/payment');

// Seed data for payments
const paymentsData = [
  {
    user: 'John Doe',
    amount: 32.97,
    method: 'credit',
  },
  {
    user: 'Jane Smith',
    amount: 29.97,
    method: 'debit',
  },
  {
    user: 'Bob Johnson',
    amount: 56.97,
    method: 'credit',
  },
  {
    user: 'Alice Smith',
    amount: 64.97,
    method: 'credit',
  },
];

// Async function to create payments in the database
const createPayments = async () => {
  try {
    // Use the Payment.create method to insert the payment documents
    await Payment.create(paymentsData);
    console.log('Data seeded!');
    process.exit();
  } catch (error) {
    // If there is an error, log it to the console
    console.log('Error seeding data:', error);
    process.exit();
  }
};

// Export the createPayments function
module.exports = createPayments;
