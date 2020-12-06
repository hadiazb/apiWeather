import auth from '../../../auth/index';

const checkAuth = (action) => {
  const middleware = (req, res, next) => {
    const owner = req.body.id;
    switch (action) {
      case 'update':
        auth.checkOwn(req, owner);
        next();
        break;

      case 'list':
        auth.checkOwn(req, owner);
        next();
        break;

      case 'remove':
        auth.checkOwn(req, owner);
        next();
        break;

      default:
        next();
    }
  };
  return middleware;
};

export default checkAuth;
