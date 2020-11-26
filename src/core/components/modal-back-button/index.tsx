import React, { FunctionComponent } from 'react';
import { Image, Pressable } from 'react-native';
import { styles } from '../../styles';

export type ModalBackButtonProps = {
  onPress?(): void;
}

export const ModalBackButton: FunctionComponent<ModalBackButtonProps> = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.modalButton} source={require('../../../assets/modal-x.png')} />
    </Pressable>
  );
};
