import React, { FunctionComponent } from 'react';
import { WorkoutAPI } from '../../core/api';
import { Text } from 'react-native';

export type AccountProps = {
  api: WorkoutAPI
}

export const Account: FunctionComponent<WorkoutAPI> = () => {
  return <Text>Welcome to Account</Text>;
};
