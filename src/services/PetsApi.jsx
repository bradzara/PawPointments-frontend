import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const getAllPets = () => {
  return axios.get(`${baseURL}/pets.json`);
};

export const getPet = (id) => {
  return axios.get(`${baseURL}/pets/${id}.json`);
};

export const createPet = (petData) => {
  return axios.post(`${baseURL}/pets.json`, petData, {
    headers: { 'Content-Type': 'multipart/form-data'}
  });
};

export const updatePet = (id, petData) => {
  return axios.patch(`${baseURL}/pets/${id}.json`, petData, {
    headers: { 'Content-Type': 'multipart/form-data'}
  });
};

export const deletePet = (id) => {
  return axios.delete(`${baseURL}/pets/${id}.json`);
};