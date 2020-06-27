import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../HomeScreen';
import { ColoredStatusBar } from '../ColoredStatusBar';
import { Colors } from '../../core/constants';
import { WorkoutAPI } from '../../core/api';

const { Navigator, Screen } = createBottomTabNavigator();

export type AppProps = {
  api: WorkoutAPI;
};

export function App(props: AppProps) {
  return (
    <NavigationContainer>
      <ColoredStatusBar backgroundColor={Colors.BLUE} />
      <Navigator>
        <Screen name="Home">
          {(navProps) => <HomeScreen {...navProps} api={props.api} />}
        </Screen>
      </Navigator>
    </NavigationContainer>
  );
}
