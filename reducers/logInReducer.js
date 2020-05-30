import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

const initialState = {
  mail: '',
  password: ''
};

const logInReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducersDefinitions.EMAIL_ADDRESS:
      return {
        ...state,
        mail: action.mail
      };
    case ReducersDefinitions.PASSWORD:
      return {
        ...state,
        password: action.password
      };
    default:
      return state;
  }
};

export default logInReducer;
