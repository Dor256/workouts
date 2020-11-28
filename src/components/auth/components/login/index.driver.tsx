import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, act, fireEvent } from 'react-native-testing-library';

export function renderComponentAndCreateDriver(Component: React.ReactElement) {
  const component = render(<NavigationContainer>{Component}</NavigationContainer>);

  return {
    async emailInput() {
      return await component.findByTestId('login-email-input');
    },

    async passwordInput() {
      return await component.findByTestId('login-password-input');
    },

    async loginButton() {
      return await component.findByTestId('login-button');
    },

    async typeEmail(email: string) {
      const input = await component.findByTestId('login-email-input');
      act(() => {
        fireEvent.changeText(input, email);
      });
    },

    async typePassword(password: string) {
      const input = await component.findByTestId('login-password-input');
      act(() => {
        fireEvent.changeText(input, password);
      });
    },

    async tapLoginButton() {
      const button = await component.findByTestId('login-button');
      act(() => {
        fireEvent.press(button);
      });
    }
  };
}
