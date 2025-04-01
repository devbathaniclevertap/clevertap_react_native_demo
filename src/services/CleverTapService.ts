// src/services/CleverTapService.ts

import CleverTap from 'clevertap-react-native';

interface CleverTapNotification {
  [key: string]: any; // Define a flexible type to handle any event properties
}

const CleverTapService = {
  onUserLogin: (props: object) => {
    CleverTap.onUserLogin(props);
  },

  profileSet: (props: object) => {
    CleverTap.profileSet(props);
  },

  recordEvent: (eventName: string, props: object) => {
    CleverTap.recordEvent(eventName, props);
  },

  toHandleNotification: () => {
    CleverTap.addListener(
      CleverTap.CleverTapPushNotificationClicked,
      (e: CleverTapNotification) => {
        console.log('Notification clicked:', e);
      },
    );
  },
};

export default CleverTapService;
