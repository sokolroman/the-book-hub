const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// Import the GraphQL schema and resolvers
const { typeDefs, resolvers } = require('./schemas/order');

// Import the database connection
const db = require('./config/connection');

// Set the server port to 3005 or the value of the PORT environment variable if it is set
const PORT = process.env.PORT || 3005;

// Initialize the Express app
const app = express();

// Initialize the Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Use JSON parsing and serve static files from the client/build folder in production
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Listen for GET requests to the root route and serve the index.html file from the client/build folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Async function to start the Apollo server and apply the middleware to the Express app
const startApolloServer = async (typeDefs, resolvers) => {
  // Start the Apollo server
  await server.start();

  // Apply the middle
  server.applyMiddleware({ app });

  // Open the database connection and start the server once the connection is open
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);