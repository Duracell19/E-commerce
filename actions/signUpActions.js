import * as ReducersDefinitions from '../models/constants/reducersDefinitions';

export function saveFullName(fullName) {
  return {
    type: ReducersDefinitions.FULL_NAME,
    fullName
  };
}

export function saveMail(mail) {
  return {
    type: ReducersDefinitions.EMAIL_ADDRESS,
    mail
  };
}

export function savePassword(password) {
  return {
    type: ReducersDefinitions.PASSWORD,
    password
  };
}

export function saveConfirmPassword(confirmPassword) {
  return {
    type: ReducersDefinitions.CONFIRM_PASSWORD,
    confirmPassword
  };
}
