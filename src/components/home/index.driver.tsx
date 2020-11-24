import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';
import { HomeProps } from '.';

export function renderComponentAndCreateDriver(Component: React.ReactElement<HomeProps>) {
  const component = render(<NavigationContainer>{Component}</NavigationContainer>);

  return {
    async workout(workout: string) {
      return await component.findByText(workout);
    },

    async fab() {
      return await component.findByTestId('fab');
    },

    async tapFab() {
      const fab = await component.findByTestId('fab');
      act(() => {
        fireEvent.press(fab);
      });
    },

    async typeWorkoutInput(text: string) {
      const input = await component.findByTestId('workout-input');
      act(() => {
        fireEvent.changeText(input, text);
      });
    },

    async tapAddWorkout() {
      const addWorkout = await component.findByTestId('add-workout');
      act(() => {
        fireEvent.press(addWorkout);
      });
    }
  };
}
