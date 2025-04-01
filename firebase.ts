import {getApps, initializeApp} from '@react-native-firebase/app';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9A5sgvdlE4yyi8pQHNx_3JHUzb20uxIM',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'flutter-clevertap-demo',
  storageBucket: 'flutter-clevertap-demo.appspot.com',
  messagingSenderId: '1040267910372',
  appId: '1:1040267910372:android:50b4d9fda190636c00a0f1',
};

// Initialize Firebase only once
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export default initializeApp;
