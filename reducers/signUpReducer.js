import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

const initialState = {
  fullName: '',
  mail: '',
  password: '',
  confirmPassword: ''
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducersDefinitions.FULL_NAME:
      return {
        ...state,
        fullName: action.fullName
      };
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
    case ReducersDefinitions.CONFIRM_PASSWORD:
      return {
        ...state,
        confirmPassword: action.confirmPassword
      };
    default:
      return state;
  }
};

export default signUpReducer;
