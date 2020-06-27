import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { HomeScreen } from './';

const mockApi = {
  getWorkouts: jest.fn().mockReturnValue([{ name: 'MadCow' }]),
  addWorkout: jest.fn()
};
const mockNavigation = jest.fn() as any;

describe('Home Screen', () => {
  it('Renders correctly', () => {
    const component = render(<HomeScreen navigation={mockNavigation} api={mockApi} />);

    expect(component.queryByText('MadCow')).toBeDefined();
    expect(component.queryByText('+')).toBeDefined();
  });

  it('Adds a workout', async () => {
    const component = render(<HomeScreen navigation={mockNavigation} api={mockApi} />);
    const fab = await component.findByText('+');

    fireEvent.press(fab);

    expect(mockApi.addWorkout).toHaveBeenCalled();
    expect(component.queryByText('DumDum')).toBeDefined();
  });
});
