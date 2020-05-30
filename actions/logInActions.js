import AsyncStorage from '@react-native-community/async-storage';
import * as RededucersDefinitions from '../models/constants/reducersDefinitions';
import * as AppDefinies from '../models/constants/appDefinies';

export function saveMail(mail) {
  return {
    type: RededucersDefinitions.EMAIL_ADDRESS,
    mail
  };
}

export function savePassword(password) {
  return {
    type: RededucersDefinitions.PASSWORD,
    password
  };
}

export function fetchLogInToken(mail, password) {
  return async () => {
    try {
      // eslint-disable-next-line no-undef
      const formdata = new FormData();
      formdata.append(AppDefinies.LOG_IN_NAME_FORM_DATA, mail);
      formdata.append(AppDefinies.PASSWORD_FORM_DATA, password);
      const data = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formdata
      };

      const token = await fetch(AppDefinies.LOG_IN_URL, data)
        .then((response) => response.json())
        .then((json) => json.token)
        .catch((error) => {
          console.error(error);
        });

      if (token !== undefined && token !== null) {
        await AsyncStorage.setItem(AppDefinies.TOKEN, token);
      }
      return token || '';
    } catch (error) {
      console.error(error);
      return null;
    }
  };
}
