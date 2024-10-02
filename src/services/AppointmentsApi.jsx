import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const getAllAppointments = () => {
  return axios.get(`${baseURL}/appointments.json`);
};

export const getAppointment = (id) => {
  return axios.get(`${baseURL}/appointments/${id}.json`);
};

export const createAppointment = (appointmentData) => {
  return axios.post(`${baseURL}/appointments.json`, appointmentData);
};

export const updateAppointment = (id, appointmentData) => {
  return axios.patch(`${baseURL}/appointments/${id}.json`, appointmentData);
};

export const deleteAppointment = (id) => {
  return axios.delete(`${baseURL}/appointments/${id}.json`);
};