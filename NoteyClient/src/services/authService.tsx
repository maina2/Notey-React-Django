import axios from "axios";

// Base URL of your Django backend
const BASE_URL = "http://localhost:8000/users";

// Register a new user
export const registerUser = async (username: string, email: string, password: string, password2: string) => {
  const response = await axios.post(`${BASE_URL}/register/`, {
    username,
    email,
    password,
    password2,
  });
  return response.data;
};

// Login and get JWT tokens
export const loginUser = async (username:string,email: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login/`, {
    username,
    email,
    password,
  });

  // Store tokens in local storage
  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
};

// Refresh access token
export const refreshToken = async () => {
  const refresh = localStorage.getItem("refresh");
  if (!refresh) throw new Error("No refresh token found");

  const response = await axios.post(`${BASE_URL}/api/token/refresh/`, {
    refresh,
  });

  localStorage.setItem("access", response.data.access);
  return response.data;
};

// Logout function
export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
