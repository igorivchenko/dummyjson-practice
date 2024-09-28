import{a as o}from"./assets/vendor-Cn2Vr82J.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=c(s);fetch(s.href,t)}})();o.defaults.baseURL="https://dummyjson.com/recipes";async function n(e){const{data:r}=await o.get(`/${e}`);return r}const l=e=>`<section class="modal-recipe">
<div class="image-recipe">
  <a class="recipe-image-link" href="${e.image}">
    <img class="image" src="${e.image}" alt="${e.tags}"/>
  </a>
</div>
<div class="recipe-text-block">
  <h1 class="recipe-title">${e.name}</h1>
  <p class="recipe-params"> Ingredients: </p>
  <ul>${e.ingredients.map(r=>`<li>${r}</li>`).join("")}</ul>
  <p class="recipe-params"><span class="recipe-bold-text">Prepare time (minutes):</span> ${e.prepTimeMinutes}</p>
  <p class="recipe-params"><span class="recipe-bold-text">Cooking time (minutes):</span> ${e.cookTimeMinutes}</p>
  <p class="recipe-params"><span class="recipe-bold-text">Difficulty:</span> ${e.difficulty}</p>
  <p class="recipe-params"><span class="recipe-bold-text">Calories per serving:</span> ${e.caloriesPerServing}</p>
  <p class="recipe-params"><span class="recipe-bold-text">Instructions:</span> ${e.instructions}</p>
</div>
</section>`;document.addEventListener("DOMContentLoaded",async()=>{try{const e=await n(3),r=l(e);document.body.insertAdjacentHTML("beforeend",r)}catch(e){console.log(e)}});
//# sourceMappingURL=index.js.map
