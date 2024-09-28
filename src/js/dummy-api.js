import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com/recipes';

export async function getAllRecipes() {
  const { data } = await axios.get();
  return data;
}

export async function getRecipesById(id) {
  const { data } = await axios.get(`/${id}`);
  return data;
}
