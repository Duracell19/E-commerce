import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

const initialState = {
  isMyProfileLoaded: false,
  categories: [],
  categoriesList: []
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducersDefinitions.CATEGORIES:
      return {
        ...state,
        categories: action.categories
      };
    case ReducersDefinitions.MY_PROFILE_IS_LOADED:
      return {
        ...state,
        isMyProfileLoaded: action.isMyProfileLoaded
      };
    case ReducersDefinitions.CATEGORIES_LIST:
      return {
        ...state,
        categoriesList: action.categoriesList
      };
    default:
      return state;
  }
};

export default myProfileReducer;
