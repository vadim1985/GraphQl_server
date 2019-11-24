import { gql } from 'apollo-server';

export default gql`
  type UserNotification {
    id: ID!
    message: String!
    author: User!
  }

  extend type Query {
    userNotification(id: ID!): UserNotification!
    userNotifications: [UserNotification!]!
  }

  extend type Mutation {
    createUserNotification(message: String!): UserNotification !
  }
`;