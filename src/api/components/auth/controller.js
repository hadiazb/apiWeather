import bcrypt from 'bcrypt';

import Auth from '../../../store/models/Auth';
import auth from '../../../auth/index';

async function login(email, password) {
  const data = await Auth.findAll({
    where: {
      email,
    },
  }).then((res) => res[0].toJSON());

  return bcrypt.compare(password, data.password).then((isTheSame) => {
    if (isTheSame === true) {
      return auth.sign(JSON.parse(JSON.stringify(data)));
    }
    throw new Error('Invalid information');
  });
}

const insert = (body) => Auth.create({
  username: body.username,
  password: bcrypt.hashSync(body.password, 10),
  email: body.email,
});

const update = (body, id) => Auth.update(
  {
    username: body.username,
    password: bcrypt.hashSync(body.password, 10),
    email: body.email,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => Auth.destroy({
  where: {
    id,
  },
});

export default {
  login,
  insert,
  update,
  remove,
};
