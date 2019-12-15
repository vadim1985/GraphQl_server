import chatMessageSchema from './chatMessageSchema';
import userNotificationSchema from './userNotificationSchema';
import userSchema from './userSchema';
import ownershipTypeSchema from './ownershipTypeSchema'
import counterpartySchema from './counterpartySchema'
import transportTypeSchema from './transportTypeSchema'

import { gql } from 'apollo-server';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [
  linkSchema, 
  chatMessageSchema, 
  userNotificationSchema,
  userSchema, 
  ownershipTypeSchema, 
  counterpartySchema,
  transportTypeSchema
];