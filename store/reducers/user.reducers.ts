import { SIGNUP } from '../actions/user.actions';
import { User } from '../../entities/User';

interface ReduxState {
  loggedInUser: User;
}

const initialState: ReduxState = {
  loggedInUser: {} as User,
};

const userReducer = (state: ReduxState = initialState, action: any) => {
  switch (action.type) {
    case SIGNUP:
      console.log('added user');

    default:
      return state;
  }
};

export default userReducer;
