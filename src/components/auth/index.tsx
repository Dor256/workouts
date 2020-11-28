import React, { FunctionComponent } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import type { Route } from '@react-navigation/native';
import { Landing } from './components/landing';
import { Login } from './components/login';
import { Colors } from '../../core/constants';

export type RouteParams = {
  Landing: {};
  Login: undefined;
  Signup: {};
}

export type StackRoutes<T extends keyof RouteParams> = Route<T, RouteParams[T]>

const { Navigator, Screen } = createStackNavigator<RouteParams>();

function screenOptions({ route }: { route: StackRoutes<keyof RouteParams> }): StackNavigationOptions {
  switch (route.name) {
    case 'Landing':
      return {
        headerTitle: '',
        headerStyle: { backgroundColor: Colors.BLUE }
      };
    default:
      return {
        headerStyle: { backgroundColor: Colors.BLUE },
        headerTintColor: 'white'
      };
  }
}

export const Auth: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={screenOptions}>
        <Screen name="Landing">
          {() => <Landing />}
        </Screen>
        <Screen name="Login">
          {() => <Login />}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
};
