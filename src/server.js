import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/index';
import errors from './network/errors';
import sequelize from './store/mysql';
import router from './network/routes';

export default class Server {
  constructor() {
    this.app = express.Application;
    this.port = config.app.port;
    this.createApp();
    this.configApp();
    this.runServer();
  }

  getApp() {
    return this.app;
  }

  createApp() {
    this.app = express();
  }

  configApp() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    router(this.app);
    this.app.use(errors);
  }

  runServer() {
    this.app.listen(this.port, () => console.log(`Listening on http://localhost:${this.port}`));

    sequelize
      .sync({ force: false })
      .then(() => {
        console.log('Data base is connect!!!');
      })
      .catch((error) => {
        console.log('There is a error:', error);
      });
  }
}
