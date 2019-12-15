import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    chatMessage: [ChatMessage!]!
    userNotification: [UserNotification!]!
    counterparty:[Counterparty]!
  }

  type Token {
    token: String!
  }

  extend type Query {
    user(id: ID!): User!
    login(name: String!, password: String!): Token!
  }

  extend type Mutation {
    createUser(name: String!, password: String!): User!
  }
`;