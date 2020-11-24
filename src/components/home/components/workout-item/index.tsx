import React, { FunctionComponent } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from '../../styles';

export type WorkoutProps = {
  name: string;
  onPress?(): void;
}

export const WorkoutItem: FunctionComponent<WorkoutProps> = (props) => {

  return (
    <Pressable testID={`workout-${props.name}`} onPress={props.onPress} style={styles.workout}>
      <Text>{props.name}</Text>
    </Pressable>
  );
};
