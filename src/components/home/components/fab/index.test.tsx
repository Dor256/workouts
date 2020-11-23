import React from 'react';
import { FloatingActionButton } from '.';
import { renderComponentAndCreateDriver } from './index.driver';

const mockPress = jest.fn();

describe('FAB', () => {
  it('Renders correctly', async () => {
    const driver = renderComponentAndCreateDriver(<FloatingActionButton onPress={mockPress} />);

    expect(await driver.fab()).toBeDefined();
  });

  it('Invokes callback when fab is pressed', async () => {
    const driver = renderComponentAndCreateDriver(<FloatingActionButton onPress={mockPress} />);

    await driver.tapFab();

    expect(mockPress).toHaveBeenCalled();
  });
});
