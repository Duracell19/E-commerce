import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

const initialState = {
  orders: [],
  isMyOrdersLoaded: false
};

const myOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ReducersDefinitions.ORDERS:
      return {
        ...state,
        orders: action.orders
      };
    case ReducersDefinitions.ORDERS_IS_LOADED:
      return {
        ...state,
        isMyOrdersLoaded: action.isMyOrdersLoaded
      };
    default:
      return state;
  }
};

export default myOrdersReducer;
