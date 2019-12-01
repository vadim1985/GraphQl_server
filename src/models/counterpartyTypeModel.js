import Sequelize from 'sequelize'
import postgresConnection from '../config/postgresConnection'

const Model = Sequelize.Model
class СounterpartyType extends Model {}
СounterpartyType.init({
    name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: postgresConnection.getSequelize(),
  modelName: 'СounterpartyType'
});

export default СounterpartyType;
