import React from 'react';
import { View, StatusBar } from 'react-native';
import { styles } from './styles';
import { Colors } from '../../constants';

export type StatusBarProps = {
  backgroundColor: Colors;
};

export function ColoredStatusBar(props: StatusBarProps) {
  const { backgroundColor } = props;
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}
