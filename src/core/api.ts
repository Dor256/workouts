export type IWorkout = {
  name: string;
};

export interface WorkoutAPI {
  getWorkouts(): Promise<IWorkout[]>;
  addWorkout(workout: IWorkout): Promise<void>;
}

type RequestBody = {[key: string]: string | number | boolean | RequestBody | string[] | number[] | boolean[] | RequestBody[]};

type Http = {
  get(url: string): Promise<any>;
  post(url: string, body: RequestBody): Promise<any>
}

const baseURL = 'http://localhost:3000';

const http: Http = {
  async get(url: string) {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
  },

  async post(url: string, body: RequestBody) {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  }
};

export const api: WorkoutAPI = {
  async getWorkouts(): Promise<IWorkout[]> {
    return await http.get(`${baseURL}/`);
  },

  async addWorkout(workout: IWorkout) {
    await http.post(`${baseURL}/`, workout);
  }
};
