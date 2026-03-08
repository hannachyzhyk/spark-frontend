import httpClient from './httpClient';
const API_BASE_URL = `${import.meta.env.VITE_GATEWAY_URL}/tasks`;

export default class TaskService {

  public static async getTasks(): Promise<any> {
    return httpClient.get(API_BASE_URL);
  }
}
