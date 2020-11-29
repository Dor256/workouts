import React, { FunctionComponent } from 'react';
import type { API } from '../../core/api';
import { Text } from 'react-native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { Colors } from '../../core/constants';

export type AccountStackParams = {
  Account: {}
}

const { Navigator, Screen } = createStackNavigator<AccountStackParams>();

function screenOptions(): StackNavigationOptions {
  return {
    headerStyle: { backgroundColor: Colors.BLUE },
    headerTintColor: '#fff'
  };
}

export type AccountProps = {
  api: API
}

export const Account: FunctionComponent<API> = () => {
  return (
    <Navigator screenOptions={screenOptions}>
      <Screen name="Account">
        {() => <Text>Welcome to Account</Text>}
      </Screen>
    </Navigator>
  );
};
