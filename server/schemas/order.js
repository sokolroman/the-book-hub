const { gql } = require('apollo-server-express');
const orderSchema = new mongoose.Schema({
    // Payment schema definition
  });
module.exports = gql`
  # Order schema
  type Order {
    # Order ID
    id: ID!
    # Order date
    date: String!
    # Order status (pending, paid, shipped, cancelled)
    status: String!
    # User who placed the order
    user: User!
    # List of items in the order
    items: [OrderItem]!
    # Order total
    total: Float!
    # Stripe payment ID
    payment: String
  }

  # Order item schema
  type OrderItem {
    # Book
    book: Book!
    # Quantity
    quantity: Int!
    # Subtotal
    subtotal: Float!
  }

  # Input for creating a new order
  input OrderInput {
    # List of items in the order
    items: [OrderItemInput]!
  }

  # Input for adding an item to an order
  input OrderItemInput {
    # Book ID
    bookId: ID!
    # Quantity
    quantity: Int!
  }

  # Input for updating an order status
  input OrderStatusInput {
    # Order ID
    id: ID!
    # New order status
    status: String!
  }

  extend type Query {
    # Get all orders
    orders: [Order]!
    # Get a specific order by ID
    order(id: ID!): Order!
  }

  extend type Mutation {
    # Create a new order
    createOrder(input: OrderInput!): Order!
    # Update an order status
    updateOrderStatus(input: OrderStatusInput!): Order!
  }
`;
module.exports = orderSchema;
