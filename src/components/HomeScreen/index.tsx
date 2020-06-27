import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { Workout } from './components/Workout';
import { IWorkout, WorkoutAPI } from '../../core/api';
import { BottomTabNavigationProps } from '../../core/typings';
import { FloatingActionButton } from './components/FloatingActionButton';

export type HomeScreenProps = {
  api: WorkoutAPI;
} & BottomTabNavigationProps;

function renderItem({ item }: { item: IWorkout }) {
  return <Workout name={item.name} />;
}

function keyExtractor(_: IWorkout, index: number) {
  return `${index}`;
}

export function HomeScreen(props: HomeScreenProps) {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const dummyWorkouts = props.api.getWorkouts();
    setWorkouts(dummyWorkouts);
  }, [props.api]);

  function onFABPress() {
    props.api.addWorkout({ name: 'DumDum' });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <FloatingActionButton onPress={onFABPress} />
    </View>
  );
}
