import React from 'react';
import { renderComponentAndCreateDriver } from './index.driver';
import { Home } from '.';

const mockApi = {
  getWorkouts: jest.fn().mockReturnValue([{ name: 'MadCow' }]),
  addWorkout: jest.fn()
};

describe('Home Screen', () => {
  it('Renders correctly', async () => {
    const driver = renderComponentAndCreateDriver(<Home api={mockApi} />);

    expect(await driver.workout('MadCow')).toBeDefined();
    expect(await driver.fab()).toBeDefined();
  });

  it('Adds a workout', async () => {
    const driver = renderComponentAndCreateDriver(<Home api={mockApi} />);

    await driver.tapFab();

    expect(mockApi.addWorkout).toHaveBeenCalled();
  });
});
