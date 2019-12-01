import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    counterpartyType: async (parent, { id }, { models: { counterpartyTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyType = await counterpartyTypeModel.findAll( { where: { id: id } } );
      return counterpartyType;
    },
    counterpartyTypes: async (parent, args, { models: { counterpartyTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyTypes = await counterpartyTypeModel.findAll();
      return counterpartyTypes;
    },
  },
  Mutation: {
    createCounterpartyType: async (parent, { name }, { models: { counterpartyTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyType = await counterpartyTypeModel.create( { name: name } );
      return counterpartyType;
    },
  },
};