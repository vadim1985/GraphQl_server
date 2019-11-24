import { gql } from 'apollo-server';

export default gql`
  type ChatMessage {
    id: ID!
    message: String!
    author: User!
  }

  extend type Query {
    chatMessage(id: ID!): ChatMessage!
    chatMessages: [ChatMessage!]!
  }

  extend type Mutation {
    createChatMessage(message: String!): ChatMessage!
  }
`;