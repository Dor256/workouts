import React, { FunctionComponent } from 'react';
import { Pressable } from 'react-native';
import type { PressableProps, ViewStyle } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../constants';

export const Button: FunctionComponent<PressableProps> = (props) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => {
        if (pressed) {
          return [styles.button, { backgroundColor: Colors.DARK_BLUE }, props.style] as ViewStyle;
        }
        return [styles.button, props.style] as ViewStyle;
      }}
    >
      {props.children}
    </Pressable>
  );
};
