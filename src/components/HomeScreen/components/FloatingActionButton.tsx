import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';

export type FABProps = {
  onPress(): void;
};

export function FloatingActionButton(props: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={props.onPress}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
}
