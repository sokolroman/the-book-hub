const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    coverImage: String!
    price: Float!
  }

  input BookInput {
    title: String!
    author: String!
    description: String!
    coverImage: String!
    price: Float!
  }

  extend type Query {
    books: [Book]
    book(_id: ID!): Book
  }

  extend type Mutation {
    createBook(book: BookInput): Book
    updateBook(_id: ID!, book: BookInput): Book
    deleteBook(_id: ID!): Book
  }
`;

module.exports = typeDefs;
