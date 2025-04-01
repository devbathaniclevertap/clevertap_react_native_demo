// App.tsx

import React from 'react';
import {Provider} from 'react-redux';
import MainScreen from './screens/MainScreen';
import {store} from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
