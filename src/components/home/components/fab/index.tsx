import React, { FunctionComponent } from 'react';
import { Pressable, Text } from 'react-native';
import { Colors } from '../../../../core/constants';
import { styles } from '../../styles';

export type FABProps = {
  onPress(): void;
};

export const FloatingActionButton: FunctionComponent<FABProps> = (props) => {
  return (
    <Pressable
      testID={'fab'}
      onPress={props.onPress}
      style={({ pressed }) => pressed ? [styles.fab, { backgroundColor: Colors.DARK_BLUE }] : styles.fab}
    >
      <Text style={styles.fabText}>+</Text>
    </Pressable>
  );
};
