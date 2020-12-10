import express from 'express';

import response from '../network/response';
import config from '../config/index';

const router = express.Router();
let message = [];

if (config.app.env === 'development') {
  message = [
    {
      user: `${config.app.serverHostDevelopment}:${config.app.port}/api/users`,
    },
  ];
} else {
  message = [
    {
      user: `${config.app.serverHostProduction}/api/users`,
    },
  ];
}

router.get('/', (req, res) => {
  response.success(req, res, message, 200);
});

export default router;
