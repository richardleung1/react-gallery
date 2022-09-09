import axios from "axios";
const baseURL = "https://api.pexels.com/v1/";

export const getCuratedPhotos = async () => {
  const URL = baseURL + "curated?per_page=20";
  const response = await axios.get(URL, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
  return response.data.photos;
};
