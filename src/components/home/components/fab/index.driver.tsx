import React from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';
import { FABProps } from '.';

export function renderComponentAndCreateDriver(Component: React.ReactElement<FABProps>) {
  const component = render(Component);

  return {
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
