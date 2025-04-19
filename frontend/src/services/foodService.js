import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

export const getAll = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/foods`);
  return data;
};

export const search = async (searchTerm) => {
  const { data } = await axios.get(`${BASE_URL}/api/foods/search/${searchTerm}`);
  return data;
};

export const getAllTags = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/foods/tags`);
  return data;
};

export const getAllByTag = async (tag) => {
  if (tag === 'All') return getAll();
  const { data } = await axios.get(`${BASE_URL}/api/foods/tag/${tag}`);
  return data;
};

export const getById = async (foodId) => {
  const { data } = await axios.get(`${BASE_URL}/api/foods/${foodId}`);
  return data;
};

export async function deleteById(foodId) {
  await axios.delete(`${BASE_URL}/api/foods/${foodId}`);
}

export async function update(food) {
  await axios.put(`${BASE_URL}/api/foods`, food);
}

export async function add(food) {
  const { data } = await axios.post(`${BASE_URL}/api/foods`, food);
  return data;
}
