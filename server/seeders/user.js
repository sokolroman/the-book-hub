const mongoose = require('mongoose');

// Import the User model
const User = require('../models/user');

// Seed data
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

// Function to seed the user data
const createUsers = async () => {
  try {
    // Use the create method of the User model to insert the user data into the database
    await User.create(users);
    console.log('Data seeded!');
    process.exit();
  } catch (error) {
    console.log('Error seeding data:', error);
    process.exit();
  }
};

// Call the createUsers function to seed the data
createUsers();
