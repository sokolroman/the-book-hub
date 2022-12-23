const mongoose = require('mongoose');
const Order = require('../models/order');

const ordersData = [
  {
    user: 'John Doe',
    items: [
      {
        title: 'The Alchemist',
        quantity: 1,
        price: 12.99,
      },
      {
        title: 'The Catcher in the Rye',
        quantity: 2,
        price: 8.99,
      },
    ],
    total: 32.97,
  },
  {
    user: 'Jane Smith',
    items: [
      {
        title: 'To Kill a Mockingbird',
        quantity: 3,
        price: 9.99,
      },
    ],
    total: 29.97,
  },
  {
    user: 'Bob Johnson',
    items: [
      {
        title: 'The Alchemist',
        quantity: 2,
        price: 12.99,
      },
      {
        title: 'The Catcher in the Rye',
        quantity: 1,
        price: 8.99,
      },
      {
        title:'To Kill a Mockingbird',
        quantity: 3,
        price: 14.99,
      }
    ],
    total: 56.97
  },
  {
    user: 'Alice Smith',
    items: [
      {
        title: 'Pride and Prejudice',
        quantity: 1,
        price: 9.99,
      },
      {
        title: 'One Hundred Years of Solitude',
        quantity: 2,
        price: 15.99,
      },
      {
        title: 'Moby-Dick',
        quantity: 4,
        price: 13.99,
      }
    ],
    total: 64.97
  }
];

const createOrders = async () => {
  try {
    await Order.create(ordersData);
    console.log('Data seeded!');
    process.exit();
  } catch (error) {
    console.log('Error seeding data:', error);
    process.exit();
  }
};

module.exports = createOrders;
