import { getRecipesById } from './js/dummy-api';
import { recipeModalCard } from './js/render-recipe-module';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await getRecipesById(3);
    const markup = recipeModalCard(data);
    document.body.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
  }
});
