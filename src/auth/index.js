import jwt from 'jsonwebtoken';

import error from '../utils/error';
import config from '../config/index';

const sign = (data) => jwt.sign(data, config.auth.secret, {
  expiresIn: 60 * 30,
});

const verify = (token) => jwt.verify(token, config.auth.secret);

const getToken = (auth) => {
  if (!auth) {
    throw error('No viene token', 401);
  }

  if (auth.indexOf('Bearer ') === -1) {
    throw error('Formato invalido', 401);
  }

  const token = auth.replace('Bearer ', '');
  return token;
};

const decodeHeader = (req) => {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);

  req.user = decoded;

  return decoded;
};

const checkOwn = (req, owner) => {
  const decoded = decodeHeader(req);

  if (decoded.id !== owner) {
    throw error('No puedes hacer esto', 401);
  }
};

export default {
  checkOwn,
  sign,
};
