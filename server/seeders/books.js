const mongoose = require('mongoose');
const Book = require('../models/book');

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

const createBooks = async () => {
  try {
    await Book.create(booksData);
    console.log('Books data seeded!');
    process.exit();
  } catch (error) {
    console.log('Error seeding books data:', error);
    process.exit();
  }
};

createBooks();
