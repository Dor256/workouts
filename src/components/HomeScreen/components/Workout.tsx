import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { IWorkout } from '../../../core/api';

export function Workout(props: IWorkout) {
  return (
    <TouchableOpacity style={styles.workout}>
      <Text>{props.name}</Text>
    </TouchableOpacity>
  );
}
