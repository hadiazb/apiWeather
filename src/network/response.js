export default {
  success: (req, res, message, status, details) => {
    const statusCode = status || 200;
    const statusMessage = message || '';

    res.status(status).send({
      error: false,
      status: statusCode,
      details,
      body: statusMessage,
    });
  },

  error: (req, res, message, status, details) => {
    const statusCode = status || 500;
    const statusMessage = message || 'Internal Server Error';

    res.status(statusCode).send({
      error: true,
      status: statusCode,
      details,
      body: statusMessage,
    });
  },
};
