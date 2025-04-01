// App.tsx

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import MainScreen from './screens/MainScreen';
import FirebaseService from './services/FirebaseService';
import {store} from './store/store';

const App: React.FC = () => {
  useEffect(() => {
    FirebaseService.requestPermission();
    FirebaseService.getToken();
    FirebaseService.setupFCMListeners();
  }, []);
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
