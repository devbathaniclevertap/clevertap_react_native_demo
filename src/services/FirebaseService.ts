import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

class FirebaseService {
  async requestPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('FCM Permission Granted');
    }
  }

  async getToken() {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  }

  async setupFCMListeners() {
    messaging().onMessage(async remoteMessage => {
      Alert.alert('New FCM Message', JSON.stringify(remoteMessage));
      console.log('FCM Foreground Message:', remoteMessage);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('FCM Background Message:', remoteMessage);
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('FCM Notification Opened:', remoteMessage);
    });

    const initialNotification = await messaging().getInitialNotification();
    if (initialNotification) {
      console.log('FCM Initial Notification:', initialNotification);
    }
  }
}

export default new FirebaseService();
