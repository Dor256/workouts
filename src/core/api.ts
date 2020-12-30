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

export type Credentials = {
  email: string;
  password: string;
}

export type IWorkout = {
  name: string;
};

export interface API {
  login(user: Credentials): Promise<void>;
  getWorkouts(): Promise<IWorkout[]>;
  addWorkout(workout: IWorkout): Promise<void>;
}

export const api: API = {
  async login(user: Credentials) {
    await http.post(`${baseURL}/login`, user);
  },

  async getWorkouts(): Promise<IWorkout[]> {
    return await http.get(`${baseURL}/workouts`);
  },

  async addWorkout(workout: IWorkout) {
    await http.post(`${baseURL}/workouts`, workout);
  }
};
