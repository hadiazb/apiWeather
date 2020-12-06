import user from '../api/components/user/network';

const router = (server) => {
  server.use('/users', user);
};

export default router;
