// This file will be our endpoints
import axios from "axios";
const baseURL = "https://rl-gallery-api.herokuapp.com/photos/";

export const getRecentPhotos = () => {
  const URL = baseURL;
  const response = axios.get(URL);
  return response;
};

export const getPhoto = (id) => {
  const URL = `${baseURL}${id}`;
  const response = axios.get(URL);
  return response;
};

export const deletePhoto = (id) => {
  const URL = `${baseURL}${id}`;
  const response = axios.delete(URL);
  return response;
};

export const editPhoto = (id, updatedPhoto) => {
  const URL = `${baseURL}${id}`;
  const response = axios.put(URL, updatedPhoto);
  return response;
};

export const createPhoto = (photo) => {
  const URL = `${baseURL}`;
  const response = axios.post(URL, photo);
  return response;
};
