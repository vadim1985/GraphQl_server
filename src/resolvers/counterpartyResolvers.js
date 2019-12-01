import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    counterparty: async (parent, { id }, { models: { counterpartyModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyType = await counterpartyModel.findAll( { where: { id: id } } );
      return counterpartyType;
    },
    counterparties: async (parent, args, { models: { counterpartyModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyTypes = await counterpartyModel.findAll();
      return counterpartyTypes;
    },
  },
  Mutation: {
    createCounterparty: async (parent, { name, INN, counterpartyTypeId }, { models: { counterpartyModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyType = await counterpartyModel.create( { name, INN, counterpartyTypeId } );
      return counterpartyType;
    },
  },
};