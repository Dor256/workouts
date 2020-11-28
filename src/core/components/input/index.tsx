import React, { FunctionComponent } from 'react';
import { TextInput } from 'react-native';
import type { TextInputProps } from 'react-native';
import { styles } from './styles';

export const Input: FunctionComponent<TextInputProps> = (props) => {
  return (
    <TextInput {...props} style={[styles.input, props.style]} />
  );
};
