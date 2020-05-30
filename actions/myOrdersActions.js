import AsyncStorage from '@react-native-community/async-storage';
import * as AppDefinies from '../models/constants/appDefinies';
import * as RededucersDefinitions from '../models/constants/reducersDefinitions';

function saveOrders(orders) {
  return {
    type: RededucersDefinitions.ORDERS,
    orders
  };
}

function setLoadingState(isLoaded) {
  return {
    type: RededucersDefinitions.ORDERS_IS_LOADED,
    isMyOrdersLoaded: isLoaded
  };
}

export function fetchData() {
  return async (dispatch) => {
    try {
      await dispatch(setLoadingState(false));

      const token = await AsyncStorage.getItem(AppDefinies.TOKEN);
      if (token !== null && token !== '') {
        // eslint-disable-next-line no-undef
        const formdata = new FormData();
        formdata.append(AppDefinies.TOKEN, token);
        const data = {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formdata
        };

        const orders = await fetch(AppDefinies.CART_URL, data)
          .then((response) => response.json())
          .then((json) => json.products)
          .catch((error) => {
            console.error(error);
          });

        if (orders !== undefined) {
          const orderList = [];
          orderList.push({ products: orders });
          await dispatch(saveOrders(orderList));
        }
      }

      await dispatch(setLoadingState(true));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getToken() {
  return async () => {
    try {
      const token = await AsyncStorage.getItem(AppDefinies.TOKEN);
      return token !== undefined ? token : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
