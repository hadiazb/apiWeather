import { Model, DataTypes } from 'sequelize';
import sequelize from '../mysql';

class Auth extends Model {}

Auth.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'auth' },
);

export default Auth;
