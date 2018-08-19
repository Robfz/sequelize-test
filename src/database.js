const Sequelize = require('sequelize');

const DEFAULT_DATABASE_PARAMS = {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

const getDatabaseConnection = (database, username, password, params) =>
  new Sequelize(database, username, password, params || DEFAULT_DATABASE_PARAMS);

module.exports = {
  getDatabaseConnection,
};
