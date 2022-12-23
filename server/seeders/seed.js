const mongoose = require('mongoose');
const db = require('../config/connection');

// Import the models
const Book = require('../models/book');
const Order = require('../models/order');
const User = require('../models/user');
const Payment = require('../models/payment');

// Seed data
const booksData = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    category: 'Fiction',
    quantity: 2,
    price: 12.99,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    category: 'Fiction',
    quantity: 1,
    price: 8.99,
  },
  {
    title: 'The Art of Computer Programming',
    author: 'Donald Knuth',
    category: 'Computer Science',
    quantity: 5,
    price: 44.99,
  },
];
const users = [
    {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'password123',
    },
    {
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    password: 'password456',
    },
    {
    name: 'Bob Johnson',
    email: 'bobjohnson@gmail.com',
    password: 'password789',
    },
    ];
    
    const orders = [
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
    
    const payments = [
    {
    user: 'John Doe',
    paymentType: 'Visa',
    cardNumber: '1234567812345678',
    expirationDate: '01/2023',
    cvv: 123,
    },
    {
    user: 'Jane Smith',
    paymentType: 'Mastercard',
    cardNumber: '8765432112345678',
    expirationDate: '03/2022',
    cvv: 456,
    },
    {
    user: 'Bob Johnson',
    paymentType: 'American Express',
    cardNumber: '4567890123456789',
    expirationDate: '06/2024',
    cvv: 789,
    },
    ];
    
    
  