import { gql } from 'apollo-server';

export default gql`
  type Counterparty {
    id: Int!
    name: String!
    INN: Int!
    type: CounterpartyType!
  }

  extend type Query {
    counterparty(id: Int!): Counterparty!
    counterparties: [Counterparty!]!
  }

  extend type Mutation {
    createCounterparty(name: String!, INN: Int!, counterpartyTypeId: Int!): Counterparty!
  }
`;