import User from '../../../store/models/User';

export default class UserPetition {
  list() {
    return User.findAll();
  }
}
