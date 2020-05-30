import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';

export default class NotificationService {
  constructor(onNotification) {
    this.configure(onNotification);
    this.lastId = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  configure(onNotification) {
    PushNotification.configure({
      onNotification,
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios'
    });
  }

  // Appears right away
  localNotification(title, message) {
    this.lastId += 1;
    PushNotification.localNotification({
      title,
      message,
      playSound: false,
      soundName: 'default',
      actions: '["Ok"]'
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkPermission(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  cancelNotif() {
    PushNotification.cancelLocalNotifications({ id: `${this.lastId}` });
  }

  // eslint-disable-next-line class-methods-use-this
  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }
}
