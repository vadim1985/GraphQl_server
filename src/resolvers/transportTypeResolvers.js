import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    transportType: async (parent, { id }, { models: { transportTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const transportType = await transportTypeModel.findAll( { where: { id: id } } );
      return transportType;
    },
    transportTypes: async (parent, args, { models: { transportTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const transportTypes = await transportTypeModel.findAll();
      return transportTypes;
    },
  },
  Mutation: {
    createTransportType: async (parent, { name }, { models: { transportTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const transportType = await transportTypeModel.create( { name } );
      return transportType;
    },
  },
};