import Sequelize from 'sequelize';
import postgresConnection from '../config/postgresConnection';
const sequelize = postgresConnection.getSequelize();

export default sequelize.define('OwnershipType', {
  short_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});