import React from 'react';
import { WorkoutItem } from '.';
import { renderComponentAndCreateDriver } from './index.driver';

const mockPress = jest.fn();

describe('Workout item', () => {
  it('Presses workout item', async () => {
    const driver = renderComponentAndCreateDriver(<WorkoutItem name="mock" onPress={mockPress} />);

    await driver.tapWorkout();

    expect(mockPress).toHaveBeenCalled();
  });
});
