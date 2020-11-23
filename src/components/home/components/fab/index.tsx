import React, { FunctionComponent } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../styles';

export type FABProps = {
  onPress(): void;
};

export const FloatingActionButton: FunctionComponent<FABProps> = (props) => {
  return (
    <Pressable testID={'fab'} style={styles.fab} onPress={props.onPress}>
      <Text style={styles.fabText}>+</Text>
    </Pressable>
  );
};
