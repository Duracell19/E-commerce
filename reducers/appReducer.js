import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

const initialState = {
  authToken: '',
  tokenIsLoaded: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducersDefinitions.AUTH_TOKEN:
      return {
        ...state,
        authToken: action.authToken
      };
    case ReducersDefinitions.TOKEN_IS_LOADED:
      return {
        ...state,
        tokenIsLoaded: action.tokenIsLoaded
      };
    default:
      return state;
  }
};

export default appReducer;
