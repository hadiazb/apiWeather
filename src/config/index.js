import dotenv from 'dotenv';

dotenv.config();

export default {
  app: {
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV,
    serverHostDevelopment: process.env.SERVER_HOST_DEVELOPMENT,
    serverHostProduction: process.env.SERVER_HOST_PRODUCTION,
  },
  database: {
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
  },
  auth: {
    secret: process.env.AUTH_JWT_SECRET,
  },
};
