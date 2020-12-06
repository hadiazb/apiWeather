import express from 'express';

import response from '../../../network/response';
import controller from './controller';

const router = express.Router();

router.post('/login', (req, res) => {
  controller.login(req.body.email, req.body.password).then((token) => {
    response.success(req, res, token, 200);
  }).catch(() => {
    response.error(
      req, res, 'Error in your information, non-existent user',
      400,
    );
  });
});

export default router;
