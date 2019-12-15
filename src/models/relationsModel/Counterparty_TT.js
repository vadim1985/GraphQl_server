import Sequelize from 'sequelize';
import postgresConnection from '../../config/postgresConnection';
const sequelize = postgresConnection.getSequelize();
import Counterparty from '../counterpartyModel';
import TransportType from '../transportTypeModel'

const Counterparty_TT = sequelize.define('Counterparty_TT', {
  counterparty_id: {
    type: Sequelize.BIGINT,
    references: {
      model: Counterparty,
      key: 'id'
    }
  },
  transport_type_id: {
    type: Sequelize.BIGINT,
    references: {
      model: TransportType,
      key: 'id'
    }
  }
}, {
  freezeTableName: true,
  timestamps: false
});
Counterparty_TT.removeAttribute('id');

Counterparty_TT.belongsTo(Counterparty, {as: 'Counterparty', foreignKey: 'counterparty_id'});
Counterparty_TT.belongsTo(TransportType, {as: 'TransportType', foreignKey: 'transport_type_id'});

export default Counterparty_TT