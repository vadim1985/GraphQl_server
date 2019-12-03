import { gql } from 'apollo-server';

export default gql`
  type Counterparty {
    id: Int!
    name: String!
    INN: String!
    type: CounterpartyType!
  }

  extend type Query {
    counterparty(id: Int!): Counterparty!
    counterparties: [Counterparty!]!
  }

  extend type Mutation {
    createCounterparty(name: String!, INN: String!, counterpartyTypeId: Int!): Counterparty!
  }
`;