import express from 'express';

import response from '../network/response';
import config from '../config/index';

const router = express.Router();
let message = [];

if (config.app.env === 'development') {
  message = [
    {
      user: `${config.app.serverHostDevelopment}:${config.app.port}/users`,
    },
  ];
} else {
  message = [
    {
      user: `${config.app.serverHostProduction}/users`,
    },
  ];
}

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

export default router;
