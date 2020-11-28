import React, { FunctionComponent, useEffect, useState } from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import type { IWorkout, API } from '../../core/api';
import { WorkoutList } from './components/workout-list';
import { Route } from '@react-navigation/native';
import { AddWorkout } from '../add-workout';
import { ModalBackButton } from '../../core/components/modal-back-button';

export type ModalParams = {
  AddWorkout: {};
  List: {};
}

export type HomeProps = {
  api: API;
}

const { Navigator, Screen } = createStackNavigator<ModalParams>();

function screenOptions({ route }: { route: Route<keyof ModalParams, {}> }): StackNavigationOptions {
  switch (route.name) {
    case 'AddWorkout':
      return {
        headerShown: true,
        headerLeft: ({ onPress }) => <ModalBackButton onPress={onPress} />
      };
    default:
      return {
        headerShown: false
      };
  }
}

export const Home: FunctionComponent<HomeProps> = (props) => {
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);

  useEffect(() => {
    props.api.getWorkouts().then((newWorkouts) => {
      setWorkouts(newWorkouts);
    });
  }, [props.api]);

  const addWorkout = async (workout: IWorkout) => {
    await props.api.addWorkout(workout);
    setWorkouts([...await props.api.getWorkouts()]);
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
