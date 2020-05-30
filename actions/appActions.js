import AsyncStorage from '@react-native-community/async-storage';
import * as RededucersDefinitions from '../models/constants/reducersDefinitions';
import * as AppDefinies from '../models/constants/appDefinies';

function saveToken(token) {
  return {
    type: RededucersDefinitions.AUTH_TOKEN,
    authToken: token
  };
}

function setLoadingState(isLoaded) {
  return {
    type: RededucersDefinitions.TOKEN_IS_LOADED,
    tokenIsLoaded: isLoaded
  };
}

async function checkIfTokenValid(token) {
  let isValid = false;

  try {
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

    isValid = await fetch(AppDefinies.LOG_IN_URL, data)
      .then((response) => response.json())
      .then((json) => json.status === 1)
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
  return isValid;
}

export function initState() {
  return async (dispatch) => {
    try {
      await dispatch(setLoadingState(false));
      const token = await AsyncStorage.getItem(AppDefinies.TOKEN);
      const isValid = await checkIfTokenValid(token);
      await dispatch(saveToken(isValid ? token : ''));
      await new Promise((r) => setTimeout(r, 1000)); // for animation

      await dispatch(setLoadingState(true));
    } catch (error) {
      console.error(error);
    }
  };
}

export function isTokenValid(token) {
  return async () => {
    try {
      const isValid = await checkIfTokenValid(token);
      return isValid;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
