import Sequelize from 'sequelize';
import postgresConnection from '../config/postgresConnection';
const sequelize = postgresConnection.getSequelize();

export default sequelize.define('Counterparty', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
},
INN: {
    type: Sequelize.TEXT
},
type: {
  type: Sequelize.BIGINT
}
}, {
  freezeTableName: true,
  timestamps: false
});
