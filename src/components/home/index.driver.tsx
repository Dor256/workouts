import React from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';
import { HomeProps } from '.';

export function renderComponentAndCreateDriver(Component: React.ReactElement<HomeProps>) {
  const component = render(Component);

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
    }
  };
}
