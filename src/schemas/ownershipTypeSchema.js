import { gql } from 'apollo-server';

export default gql`
  type OwnershipType {
    id: Int!
    short_name: String!
    full_name: String!
  }

  extend type Query {
    ownershipType(id: Int!): OwnershipType!
    ownershipTypes: [OwnershipType!]!
  }

  extend type Mutation {
    createOwnershipType(short_name: String!, full_name: String!): OwnershipType!
  }
`;