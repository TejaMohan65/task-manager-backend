const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false, // turn off SQL logs in prod
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // only if Railway requires SSL (some do)
      }
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('Sequelize connected to MySQL'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;
