import React, { FunctionComponent } from 'react';
import { Pressable } from 'react-native';
import type { PressableProps, ViewStyle } from 'react-native';
import { styles } from './styles';

export const Button: FunctionComponent<PressableProps> = (props) => {
  return (
    <Pressable {...props} style={[styles.button, props.style] as ViewStyle}>
      {props.children}
    </Pressable>
  );
};
