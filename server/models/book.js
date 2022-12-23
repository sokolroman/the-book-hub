const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
title: {
type: String,
required: true,
},
author: {
type: String,
required: true,
},
description: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
quantity: {
type: Number,
required: true,
},
category: {
type: String,
required: true,
},
coverImage: {
type: String,
required: true,
},
createdAt: {
type: Date,
default: Date.now,
},
});

// Create the Book model based on the schema
const Book = mongoose.model('Book', bookSchema);

// Export the model
module.exports = Book;