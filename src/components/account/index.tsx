import React, { FunctionComponent } from 'react';
import type { API } from '../../core/api';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export type AccountStackParams = {
  Account: {}
}

const { Navigator, Screen } = createStackNavigator<AccountStackParams>();

export type AccountProps = {
  api: API
}

export const Account: FunctionComponent<API> = () => {
  return (
    <Navigator>
      <Screen name="Account">
        {() => <Text>Welcome to Account</Text>}
      </Screen>
    </Navigator>
  );
};
