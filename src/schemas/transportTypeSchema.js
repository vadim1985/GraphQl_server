import { gql } from 'apollo-server';

export default gql`
  type TransportType {
    id: Int!
    name: String!
  }

  extend type Query {
    transportType(id: Int!): TransportType!
    transportTypes: [TransportType!]!
  }

  extend type Mutation {
    createTransportType(name: String!): TransportType!
  }
`;