import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const getAllPets = () => {
  return axios.get(`${baseURL}/pets.json`);
};

export const getPet = (id) => {
  return axios.get(`${baseURL}/pets/${id}.json`);
};

export const createPet = (petData) => {
  return axios.post(`${baseURL}/pets.json`, petData);
};

export const updatePet = (id, petData) => {
  return axios.patch(`${baseURL}/pets/${id}.json`, petData);
};

export const deletePet = (id) => {
  return axios.delete(`${baseURL}/pets/${id}.json`);
};