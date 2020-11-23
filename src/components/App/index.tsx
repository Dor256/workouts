import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Home } from '../home';
import { ColoredStatusBar } from '../colored-status-bar';
import { Colors } from '../../core/constants';
import { WorkoutAPI } from '../../core/api';
import { BottomTabNavigationProps } from '../../core/typings';
import { TabImage } from './components/TabImage';
import { Account } from '../account';

type RouteParams = {
  Home: {},
  Account: {}
}

const { Navigator, Screen } = createBottomTabNavigator<RouteParams>();

export type AppProps = {
  api: WorkoutAPI;
};

function screenOptions({ route }: BottomTabNavigationProps): BottomTabNavigationOptions {
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
      <ColoredStatusBar backgroundColor={Colors.BLUE} />
      <Navigator screenOptions={screenOptions} tabBarOptions={{ showLabel: false }}>
        <Screen name="Home">
          {() => <Home api={props.api} />}
        </Screen>
        <Screen name="Account" component={Account}/>
      </Navigator>
    </NavigationContainer>
  );
};
