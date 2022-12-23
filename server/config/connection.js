const mongoose = require('mongoose');

// Set the URI for connecting to the MongoDB server
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";

// Connect to the MongoDB server
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Export the mongoose connection
module.exports = mongoose.connection;
