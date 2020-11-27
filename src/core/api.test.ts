import { api } from './api';

describe('Workouts API', () => {
  it('adds a workout', async () => {
    global.fetch = jest.fn();

    await api.addWorkout({ name: 'mockWorkout' });

    expect(global.fetch).toHaveBeenCalled();
  });

  it('gets the list of workouts', async () => {
    const mockWorkout = { name: 'mockWorkout' };
    global.fetch = jest.fn().mockResolvedValue({ json: () => [mockWorkout] });

    const workouts = await api.getWorkouts();

    expect(workouts).toEqual([mockWorkout]);
  });
});
