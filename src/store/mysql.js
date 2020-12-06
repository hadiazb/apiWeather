import { Sequelize } from 'sequelize';
import config from '../config/index';

const sequelize = new Sequelize(
  config.database.dbName,
  config.database.dbUser,
  config.database.dbPassword,
  {
    host: config.database.dbHost,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
  },
);

export default sequelize;
