import React from 'react';
import { renderComponentAndCreateDriver } from './index.driver';
import { Home } from '.';

const mockApi = {
  getWorkouts: jest.fn().mockResolvedValue([{ name: 'MadCow' }]),
  addWorkout: jest.fn()
};

describe('Home Screen', () => {
  it('Renders correctly', async () => {
    const driver = renderComponentAndCreateDriver(<Home api={mockApi} />);

    expect(await driver.workout('MadCow')).toBeDefined();
    expect(await driver.fab()).toBeDefined();
  });

  it('Adds a workout', async () => {
    const mockWorkout = 'mock';
    const driver = renderComponentAndCreateDriver(<Home api={mockApi} />);

    await driver.tapFab();
    await driver.typeWorkoutInput(mockWorkout);
    await driver.tapAddWorkout();

    expect(mockApi.addWorkout).toHaveBeenCalledWith({ name: mockWorkout });
  });

  it('Displays chosen workout plan', async () => {
    const driver = renderComponentAndCreateDriver(<Home api={mockApi} />);

    await driver.tapWorkout('MadCow');

    expect(await driver.workoutPage()).toBeDefined();
  });
});
