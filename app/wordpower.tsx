import 'react-native-gesture-handler';
import './utils/ignore-warnings';
import React, {useRef} from 'react';
import {
  RootNavigator,
  setRootNavigation,
  useNavigationPersistence,
} from './navigation';
import {NAVIGATION_PERSISTENCE_KEY} from './constants';
import * as storage from './utils/storage';
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
    <RootNavigator
      ref={navigationRef}
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}
    />
  );
}
