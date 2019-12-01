import chatMessageSchema from './chatMessageSchema';
import userNotificationSchema from './userNotificationSchema';
import userSchema from './userSchema';
import counterpartyTypeSchema from './counterpartyTypeSchema'
import counterpartySchema from './counterpartySchema'

import { gql } from 'apollo-server';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, chatMessageSchema, userNotificationSchema, userSchema, counterpartyTypeSchema, counterpartySchema];