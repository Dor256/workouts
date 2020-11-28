import React from 'react';
import { Login } from '.';
import { renderComponentAndCreateDriver } from './index.driver';

const mockLogin = jest.fn();

jest.mock('../../../../core/hooks/useAuth', () => {
  return {
    useAuth: () => ({ login: mockLogin })
  };
});

describe('Login', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders login screen', async () => {
    const driver = renderComponentAndCreateDriver(<Login />);

    expect(await driver.emailInput()).toBeDefined();
    expect(await driver.passwordInput()).toBeDefined();
  });

  it('logs in', async () => {
    const mockUser = { email: 'mock@test.com', password: '111111' };
    const driver = renderComponentAndCreateDriver(<Login />);

    await driver.typeEmail(mockUser.email);
    await driver.typePassword(mockUser.password);
    await driver.tapLoginButton();

    expect(mockLogin).toHaveBeenCalledWith(mockUser);
  });

  it('does not log in when no credentials provided', async () => {
    const driver = renderComponentAndCreateDriver(<Login />);

    await driver.tapLoginButton();

    expect(mockLogin).not.toHaveBeenCalled();
  });
});
