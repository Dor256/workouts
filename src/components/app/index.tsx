import React, { FunctionComponent } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Home } from '../home';
import type { API } from '../../core/api';
import { TabImage } from './components/tab-image';
import { Account } from '../account';
import { Auth } from '../auth';
import { useAuth } from '../../core/hooks/useAuth';

type RouteParams = {
  Home: {},
  Account: {}
}

const { Navigator, Screen } = createBottomTabNavigator<RouteParams>();

export type User = {
  name: string;
  email: string;
}

export type AppProps = {
  api: API;
};

function screenOptions({ route }: { route: Route<keyof RouteParams, {}> }): BottomTabNavigationOptions {
  return {
    tabBarIcon: (props) => {
      switch (route.name) {
        case 'Home': {
          const source = props.focused ? require('../../assets/weight-active.png') : require('../../assets/weight.png');
          return <TabImage source={source} />;
        }
        case 'Account': {
          const source = props.focused ? require('../../assets/account-active.png') : require('../../assets/account.png');
          return <TabImage source={source} />;
        }
      }
    }
  };
}

export const App: FunctionComponent<AppProps> = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Auth />;
  }

  return (
    <NavigationContainer>
      <Navigator
        backBehavior="none"
        screenOptions={screenOptions}
        tabBarOptions={{ showLabel: false }}
      >
        <Screen name="Home">
          {() => <Home api={props.api} />}
        </Screen>
        <Screen name="Account" component={Account} />
      </Navigator>
    </NavigationContainer>
  );
};
