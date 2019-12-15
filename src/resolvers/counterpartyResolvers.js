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
    createCounterparty: async (parent, { name, INN, KPP, OGRN, OKPO, railwayCode, ELS, address, foreigner, ownershipTypeId:type }, { models: { counterpartyModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const counterpartyType = await counterpartyModel.create( { name, INN, KPP, OGRN, OKPO, railwayCode, ELS, address, foreigner, type } );
      return counterpartyType;
    },
  },
  Counterparty:{
    ownershipType: async ({ownershipType: id}, params, { models: { ownershipTypeModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const [ownershipType] = await ownershipTypeModel.findAll({ where: { id: id } })
      return ownershipType.dataValues
    },
    transportTypes: async ({id}, params, { models: { transportTypeModel, relationsModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      const transportTypesArray = await relationsModel.Counterparty_TT.findAll({
        include: [{
          model: transportTypeModel,
          as: 'TransportType',
          required: false
        }],
        where: { counterparty_id: id }
      })
      return transportTypesArray.map(({dataValues:{TransportType}}) => TransportType)
    },
  },
};