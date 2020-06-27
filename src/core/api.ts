export type IWorkout = {
  name: string;
};

export interface WorkoutAPI {
  getWorkouts(): IWorkout[];
  addWorkout(workout: IWorkout): void;
}

const dummyWorkouts: IWorkout[] = [
  { name: 'MadCow' },
  { name: '5x5' },
  { name: 'SS' },
  { name: 'Push/Pull' }
];

export const api: WorkoutAPI = {
  getWorkouts(): IWorkout[] {
    return dummyWorkouts;
  },

  addWorkout(workout: IWorkout) {
    dummyWorkouts.push(workout);
  }
};
