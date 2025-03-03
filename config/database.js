const { Sequelize } = require('sequelize');
const config = require('./config'); // Asegúrate de importar bien tu archivo de configuración

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging, 
  }
);

module.exports = sequelize;
