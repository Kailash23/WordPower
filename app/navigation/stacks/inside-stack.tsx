import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {routes} from '../routes';
import {Dashboard} from '../../screens';
import {typography} from '../../theme';

const Stack = createNativeStackNavigator();

export function InsideStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: typography.medium,
        },
        headerTopInsetEnabled: false,
      }}>
      <Stack.Screen name={routes.DASHBOARD_SCREEN} component={Dashboard} />
    </Stack.Navigator>
  );
}
