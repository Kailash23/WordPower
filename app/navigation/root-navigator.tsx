import React from 'react';

import {InsideStack} from './stacks/inside-stack';
import {OutsideStack} from './stacks/outside-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {routes} from './routes';

const Stack = createStackNavigator();

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  const isAuthenticated = false;

  return (
    <NavigationContainer {...props} ref={ref}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <Stack.Screen name={routes.INSIDE_STACK} component={InsideStack} />
        ) : (
          <Stack.Screen name={routes.OUTSIDE_STACK} component={OutsideStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});
