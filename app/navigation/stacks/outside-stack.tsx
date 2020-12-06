import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {SignIn} from '../../screens';
import {typography} from '../../theme';
import {routes} from '../routes';

const Stack = createNativeStackNavigator();

export function OutsideStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: typography.medium,
        },
        headerTopInsetEnabled: false,
      }}>
      <Stack.Screen name={routes.SIGN_IN_SCREEN} component={SignIn} />
    </Stack.Navigator>
  );
}
