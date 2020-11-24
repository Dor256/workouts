import React, { FunctionComponent } from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Home } from '../home';
import { WorkoutAPI } from '../../core/api';
import { TabImage } from './components/tab-image';
import { Account } from '../account';

type RouteParams = {
  Home: {},
  Account: {}
}

const { Navigator, Screen } = createBottomTabNavigator<RouteParams>();

export type AppProps = {
  api: WorkoutAPI;
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
