import { api } from './api';

const mockPostRequest = {
  headers: expect.any(Object),
  method: 'POST'
};

describe('Workouts API', () => {
  it('logs user in', async () => {
    const mockUser = { email: 'test@test.com', password: '111111' };
    global.fetch = jest.fn();

    await api.login(mockUser);

    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), { ...mockPostRequest, body: JSON.stringify(mockUser) });
  });

  it('adds a workout', async () => {
    const mockWorkout = { name: 'mockWorkout' };
    global.fetch = jest.fn();

    await api.addWorkout(mockWorkout);

    expect(global.fetch).toHaveBeenCalledWith(expect.any(String), { ...mockPostRequest, body: JSON.stringify(mockWorkout) });
  });

  it('gets the list of workouts', async () => {
    const mockWorkout = { name: 'mockWorkout' };
    global.fetch = jest.fn().mockResolvedValue({ json: () => [mockWorkout] });

    const workouts = await api.getWorkouts();

    expect(workouts).toEqual([mockWorkout]);
  });
});
