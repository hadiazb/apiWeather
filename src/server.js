import express from 'express';
import config from './config/index';

const app = express();

app.listen(config.app.port, () => {
  console.log(`Listening on http://localhost:${config.app.port}`);
});
