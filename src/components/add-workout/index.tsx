import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useState } from 'react';
import { Text } from 'react-native';
import { IWorkout } from '../../core/api';
import { Button } from '../../core/components/button';
import { Input } from '../../core/components/input';
import { ModalParams } from '../home';
import { styles } from './styles';

export type AddWorkoutProps = {
  addWorkout(workout: IWorkout): Promise<void>;
}

export const AddWorkout: FunctionComponent<AddWorkoutProps> = (props) => {
  const [text, setText] = useState('');
  const navigation = useNavigation<StackNavigationProp<ModalParams>>();

  function onChangeText(changedText: string) {
    setText(changedText);
  }

  async function onAddPress() {
    await props.addWorkout({ name: text });
    navigation.goBack();
  }

  return (
    <>
      <Input
        testID="workout-input"
        value={text}
        onChangeText={onChangeText}
        placeholder="Enter workout..."
      />
      <Button testID="add-workout" onPress={onAddPress}>
        <Text style={styles.buttonText}>Add</Text>
      </Button>
    </>
  );
};