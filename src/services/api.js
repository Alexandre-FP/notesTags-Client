import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-api-11pc.onrender.com/api", // requisição para o backend
});