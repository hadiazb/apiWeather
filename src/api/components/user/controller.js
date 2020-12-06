import User from '../../../store/models/User';

const list = () => User.findAll();

const get = (id) => User.findAll({
  where: {
    id,
  },
});

const insert = (body) => User.create({
  name: body.name,
  username: body.username,
  phone: body.phone,
  email: body.email,
  country: body.country,
  state: body.state,
  city: body.city,
  birthday: body.birthday,
});

const update = (body, id) => User.update(
  {
    id: body.id,
    name: body.name,
    username: body.username,
    phone: body.phone,
    email: body.email,
    country: body.country,
    state: body.state,
    city: body.city,
    birthday: body.birthday,
  },
  {
    where: {
      id,
    },
  },
);

const remove = (id) => User.destroy({
  where: {
    id,
  },
});

export default {
  list,
  get,
  insert,
  update,
  remove,
};
