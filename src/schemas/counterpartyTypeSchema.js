import { gql } from 'apollo-server';

export default gql`
  type CounterpartyType {
    id: Int!
    name: String!
  }

  extend type Query {
    counterpartyType(id: Int!): CounterpartyType!
    counterpartyTypes: [CounterpartyType!]!
  }

  extend type Mutation {
    createCounterpartyType(name: String!): CounterpartyType!
  }
`;