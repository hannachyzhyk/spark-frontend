export default class HttpClient {

  static async post(url: string, options: RequestInit = {}) {
    return this.baseRequest(url, 'POST', options);
  }

  static async put(url: string, options: RequestInit = {}) {
    return this.baseRequest(url, 'PUT', options);
  }

  static async delete(url: string, options: RequestInit = {}) {
    return this.baseRequest(url, 'DELETE', options);
  }

  static async get(url: string, options: RequestInit = {}) {
    return this.baseRequest(url, 'GET', options);
  }

  static async baseRequest(url: string, method: string, options: RequestInit = {}) {
    try {
      const response = await fetch(url, {
        method,
        headers: options.headers || { 'Content-Type': 'application/json' },
        body: options.body ? JSON.stringify(options.body) : undefined,
        credentials: 'include'
      });

      if (response.status === 401) {
        window.location.href = '/login';
        return;
      }

      return response.json();

    }
    catch (error) {
      console.error(error);
      throw error;
    }
  }
}
