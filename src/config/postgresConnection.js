import Sequelize from 'sequelize';

let instance = null;
let sequelize = null;
class PostgresConnection{
    constructor(){
        if (!instance){
            instance = this;
        }
        sequelize = new Sequelize('test_postgr_DB', 'postgres', '123', {
            host: 'localhost',
            dialect: 'postgres',
            timestamps: false
        });
        return instance
    }
    authenticate(){
        sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
    }
    getSequelize(){
        return sequelize
    }
}

export default new PostgresConnection()