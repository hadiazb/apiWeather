import { Model, DataTypes } from 'sequelize';
import sequelize from '../mysql';

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    birthday: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  { sequelize, modelName: 'user' },
);

export default User;
