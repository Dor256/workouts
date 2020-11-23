import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { styles } from '../styles';

export type TabImageProps = {
  source: ImageSourcePropType;
}

export function TabImage(props: TabImageProps) {
  return <Image style={styles.tabImage} source={props.source} />;
}
