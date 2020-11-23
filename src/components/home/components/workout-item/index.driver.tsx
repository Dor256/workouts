import React from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';
import { WorkoutProps } from '.';

export function renderComponentAndCreateDriver(Component: React.ReactElement<WorkoutProps>) {
  const component = render(Component);

  return {
    async tapWorkout() {
      const workout = await component.findByTestId('workout-mock');
      act(() => {
        fireEvent.press(workout);
      });
    }
  };
}
