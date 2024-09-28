export const recipeModalCard = recipe => `<section class="modal-recipe">
<div class="image-recipe">
  <a class="recipe-image-link" href="${recipe.image}">
    <img class="image" src="${recipe.image}" alt="${recipe.tags}"/>
  </a>
</div>
<div class="recipe-text-block">
  <h1 class="recipe-title">${recipe.name}</h1>
  <p class="recipe-params"> Ingredients: </p>
  <ul>${recipe.ingredients
    .map(ingridient => `<li>${ingridient}</li>`)
    .join('')}</ul>
  <p class="recipe-params"><span class="recipe-bold-text">Prepare time (minutes):</span> ${
    recipe.prepTimeMinutes
  }</p>
  <p class="recipe-params"><span class="recipe-bold-text">Cooking time (minutes):</span> ${
    recipe.cookTimeMinutes
  }</p>
  <p class="recipe-params"><span class="recipe-bold-text">Difficulty:</span> ${
    recipe.difficulty
  }</p>
  <p class="recipe-params"><span class="recipe-bold-text">Calories per serving:</span> ${
    recipe.caloriesPerServing
  }</p>
  <p class="recipe-params"><span class="recipe-bold-text">Instructions:</span> ${
    recipe.instructions
  }</p>
</div>
</section>`;
