import user from '../api/components/user/network';
import auth from '../api/components/auth/network';
import apiIndex from '../api/apiIndex';

const router = (server) => {
  server.use('/api/users', user);
  server.use('/api/users', auth);
  server.use('/api', apiIndex);
};

export default router;
