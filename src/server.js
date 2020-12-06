import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import config from './config/index';
import errors from './network/errors';

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
    this.app.use(errors);
  }

  runServer() {
    this.app.listen(this.port, () => console.log(`Listening on http://localhost:${this.port}`));
  }
}
