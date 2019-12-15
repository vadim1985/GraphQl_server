import { gql } from 'apollo-server';

export default gql`
  type Counterparty {
    id: Int!
    name: String!
    INN: String!
    KPP: String
    OGRN: String
    OKPO: String
    railwayCode: String
    ELS: String
    address: String
    foreigner: Boolean
    ownershipType: OwnershipType!
    transportTypes:[TransportType]!
  }

  extend type Query {
    counterparty(id: Int!): Counterparty!
    counterparties: [Counterparty!]!
  }

  extend type Mutation {
    createCounterparty(name: String!, INN: String!, KPP: String, OGRN: String, OKPO: String, railwayCode: String, ELS: String, address: String, foreigner: Boolean, ownershipTypeId: Int!): Counterparty!
  }
`;