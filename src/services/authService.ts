import httpClient from './httpClient';

const API_BASE_URL = `${import.meta.env.VITE_GATEWAY_URL}/account`;

export default class AuthService {

  static async register(username: string, password: string) {
    return httpClient.post(`${API_BASE_URL}/register`, { body: { username, password } as any });
  }

  static async login(username: string, password: string) {
    return httpClient.post(`${API_BASE_URL}/register`, { body: { username, password } as any });
  }
}
