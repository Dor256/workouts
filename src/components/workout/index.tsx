import React, { FunctionComponent } from 'react';
import { useRoute } from '@react-navigation/native';
import { StackRoutes } from '../home/components/workout-list';
import { Text } from 'react-native';

export const Workout: FunctionComponent = () => {
  const route = useRoute<StackRoutes<'Workout'>>();

  return <Text testID="workout-page">{route.params.name}</Text>;
};
