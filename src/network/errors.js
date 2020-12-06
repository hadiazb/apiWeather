import response from './response';

const errors = (err, req, res, next) => {
  console.log('[error]', err);
  const message = err.message || 'Internal Error';
  const status = err.statusCode || 500;

  response.error(req, res, message, status);
  next();
};

export default errors;
