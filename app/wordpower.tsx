import 'react-native-gesture-handler';
import './utils/ignore-warnings';
import React, {useRef} from 'react';
import {
  RootNavigator,
  setRootNavigation,
  useNavigationPersistence,
} from './navigation';
import {NAVIGATION_PERSISTENCE_KEY} from './constants';
import {Provider} from 'react-redux';
import * as storage from './utils/storage';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// Optimize memory usage and performance
// This puts screens in a native ViewController or Activity which
import {enableScreens} from 'react-native-screens';
enableScreens();

export default function App() {
  const navigationRef = useRef<any>();
  setRootNavigation(navigationRef);

  const {
    initialNavigationState,
    onNavigationStateChange,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  return (
    <Provider store={store}>
      <PersistGate loading={null} {...{persistor}}>
        <RootNavigator
          ref={navigationRef}
          initialState={initialNavigationState}
          onStateChange={onNavigationStateChange}
        />
      </PersistGate>
    </Provider>
  );
}
