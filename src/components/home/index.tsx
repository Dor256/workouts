import React, { FunctionComponent, useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { IWorkout, WorkoutAPI } from '../../core/api';
import { WorkoutList } from './components/workout-list';
import { Route } from '@react-navigation/native';
import { AddWorkout } from '../add-workout';

export type ModalParams = {
  AddWorkout: {};
  List: {};
}

export type HomeProps = {
  api: WorkoutAPI;
}

const { Navigator, Screen } = createStackNavigator<ModalParams>();

function screenOptions({ route }: { route: Route<keyof ModalParams, {}> }): StackNavigationOptions {
  return {
    headerShown: route.name === 'AddWorkout'
  };
}

export const Home: FunctionComponent<HomeProps> = (props) => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    const dummyWorkouts = props.api.getWorkouts();
    setWorkouts(dummyWorkouts);
  }, [props.api]);

  const addWorkout = (workout: IWorkout) => {
    props.api.addWorkout(workout);
    setWorkouts([...props.api.getWorkouts()]);
  };

  return (
    <Navigator mode="modal" screenOptions={screenOptions} initialRouteName="List">
      <Screen name="List">
        {() => <WorkoutList workouts={workouts} />}
      </Screen>
      <Screen name="AddWorkout">
        {() => <AddWorkout addWorkout={addWorkout} />}
      </Screen>
    </Navigator>
  );
};
