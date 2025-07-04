// src/services/authService.js
import axios from "axios";
import { BASE_URL } from "./api"; // Ajusta ruta si estás en otra carpeta

const API_URL = `${BASE_URL}/api/users`;

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register/`, userData);
};

