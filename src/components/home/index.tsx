import React, { FunctionComponent, useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { styles } from './styles';
import { WorkoutItem } from './components/workout-item';
import { IWorkout, WorkoutAPI } from '../../core/api';
import { FloatingActionButton } from './components/fab';
import { createStackNavigator } from '@react-navigation/stack';
import { Route, useRoute } from '@react-navigation/native';

export type StackRoutes = {
  List: {};
  Workout: { name: string };
}

const { Navigator, Screen } = createStackNavigator<StackRoutes>();

function Stam() {
  const route = useRoute<Route<string, {name: string}>>();
  return <Text>{route.params.name}</Text>;
}

export type HomeProps = {
  api: WorkoutAPI;
};

function renderItem({ item }: { item: IWorkout }) {
  return <WorkoutItem name={item.name} />;
}

function keyExtractor(_: IWorkout, index: number) {
  return `${index}`;
}

export const Home: FunctionComponent<HomeProps> = (props) => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const dummyWorkouts = props.api.getWorkouts();
    setWorkouts(dummyWorkouts);
  }, [props.api]);

  function onFABPress() {
    props.api.addWorkout({ name: 'DumDum' });
    setWorkouts([...props.api.getWorkouts()]);
  }

  return (
    <Navigator>
      <Screen name="List" options={{ headerShown: false }}>
        {() => {
          return (
            <View style={styles.container}>
              <Text style={styles.heading}>Workouts</Text>
              <FlatList
                extraData={workouts}
                data={workouts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
              <FloatingActionButton onPress={onFABPress} />
            </View>
          );
        }}
      </Screen>
      <Screen name="Workout" component={Stam} />
    </Navigator>
  );
};
