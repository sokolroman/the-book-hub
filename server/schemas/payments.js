const { gql } = require('apollo-server-express');
const paymentSchema = new mongoose.Schema({
  // Payment schema definition
});
module.exports = gql`
  type Payment {
    _id: ID!
    user: User!
    amount: Float!
    stripeChargeId: String!
    date: Date!
  }

  extend type Query {
    payments: [Payment]
  }

  extend type Mutation {
    createPayment(amount: Float!, stripeToken: String!): Payment
  }
`;

module.exports = paymentSchema;