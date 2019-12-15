import Sequelize from 'sequelize';
import postgresConnection from '../config/postgresConnection';
const sequelize = postgresConnection.getSequelize();
import OwnershipType from './ownershipTypeModel';

export default sequelize.define('Counterparty', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  INN: {
      type: Sequelize.TEXT
  },
  KPP: {
    type: Sequelize.TEXT
  },
  OGRN: {
    type: Sequelize.TEXT
  },
  OKPO: {
    type: Sequelize.TEXT
  },
  railwayCode: {
    type: Sequelize.TEXT
  },
  ELS: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.TEXT
  },
  foreigner: {
    type: Sequelize.BOOLEAN
  },
  ownershipType: {
    type: Sequelize.BIGINT,
    references: {
      model: OwnershipType,
      key: 'id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});