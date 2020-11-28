import React from 'react';
import { Auth } from '.';
import { renderComponentAndCreateDriver } from './index.driver';

describe('Auth', () => {
  it('renders log in screen', async () => {
    const driver = renderComponentAndCreateDriver(<Auth />);

    expect(await driver.landingLoginButton()).toBeDefined();
    expect(await driver.landingSignupButton()).toBeDefined();
  });

  it('navigates to login screen', async () => {
    const driver = renderComponentAndCreateDriver(<Auth />);

    await driver.tapLandingLoginButton();

    expect(await driver.loginEmail()).toBeDefined();
    expect(await driver.loginPassword()).toBeDefined();
    expect(await driver.loginButton()).toBeDefined();
  });
});
