import Sequelize from 'sequelize'
import postgresConnection from '../config/postgresConnection'

const Model = Sequelize.Model
class Сounterparty extends Model {}
Сounterparty.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    INN: {
        type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.BIGINT
  }
}, {
  sequelize: postgresConnection.getSequelize(),
  modelName: 'Сounterparty'
});

export default Сounterparty;
