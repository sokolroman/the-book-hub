const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
_id: ID!
name: String!
email: String!
password: String!
address: String!
}

input UserInput {
name: String!
email: String!
password: String!
address: String!
}

extend type Query {
users: [User]
user(_id: ID!): User
}

extend type Mutation {
createUser(user: UserInput): User
updateUser(_id: ID!, user: UserInput): User
deleteUser(_id: ID!): User
}
`;

module.exports = typeDefs;