import messaging from '@react-native-firebase/messaging';
class FirebaseService {
  // Request notification permissions
  static async requestNotificationPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  }

  // Get FCM Token
  static async getToken() {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      return token;
    } catch (error) {
      console.error('Error fetching FCM token:', error);
    }
  }
}

export default FirebaseService;
