import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useCallback } from 'react';
import { Text, Pressable } from 'react-native';
import { StackRoutes } from '../..';
import { styles } from '../../styles';

export type WorkoutProps = {
  name: string;
  onPress?(): void;
}

export const WorkoutItem: FunctionComponent<WorkoutProps> = (props) => {
  const navigation = useNavigation<StackNavigationProp<StackRoutes>>();

  const onItemPress = useCallback(() => {
    navigation.push('Workout', { name: props.name });
  }, [navigation, props.name]);

  return (
    <Pressable testID={`workout-${props.name}`} onPress={onItemPress} style={styles.workout}>
      <Text>{props.name}</Text>
    </Pressable>
  );
};
