import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    ownershipType: async (parent, { id }, { models: { ownershipTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const ownershipType = await ownershipTypeModel.findAll( { where: { id: id } } );
      return ownershipType;
    },
    ownershipTypes: async (parent, args, { models: { ownershipTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const ownershipTypes = await ownershipTypeModel.findAll();
      return ownershipTypes;
    },
  },
  Mutation: {
    createOwnershipType: async (parent, { short_name, full_name }, { models: { ownershipTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const ownershipType = await ownershipTypeModel.create( { short_name, full_name } );
      return ownershipType;
    },
  },
};