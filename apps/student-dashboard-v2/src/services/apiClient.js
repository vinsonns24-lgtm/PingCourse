// Base API Client
const BASE_URL = "http://localhost:3000/api";

export const apiClient = {
  async get(endpoint) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include" // enable when dealing with real cookies across ports
    });
    
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
    return res.json();
  },

  async post(endpoint, data) {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
    return res.json();
  }
};
