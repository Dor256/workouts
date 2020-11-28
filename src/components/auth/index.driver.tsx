import React from 'react';
import { fireEvent, render, act } from 'react-native-testing-library';

export function renderComponentAndCreateDriver(Component: React.ReactElement) {
  const component = render(Component);

  return {
    async landingSignupButton() {
      return await component.findByTestId('landing-signup-button');
    },

    async landingLoginButton() {
      return await component.findByTestId('landing-login-button');
    },

    async tapLandingLoginButton() {
      const button = await component.findByTestId('landing-login-button');
      act(() => {
        fireEvent.press(button);
      });
    },

    async loginEmail() {
      return await component.findByTestId('login-email-input');
    },

    async loginPassword() {
      return await component.findByTestId('login-password-input');
    },

    async loginButton() {
      return await component.findByTestId('login-button');
    }
  };
}
