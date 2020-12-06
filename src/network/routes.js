import user from '../api/components/user/network';
import auth from '../api/components/auth/network';
import apiIndex from '../api/apiIndex';

const router = (server) => {
  server.use('/users', user);
  server.use('/users', auth);
  server.use('/', apiIndex);
};

export default router;
