import Sequelize from 'sequelize';
import postgresConnection from '../config/postgresConnection';
const sequelize = postgresConnection.getSequelize();

export default sequelize.define('CounterpartyType', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
});