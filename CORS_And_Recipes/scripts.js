const baseEndpoint = "https://recipes.beginnerjavascript.com/api";
const proxy = "https://cors-anywhere.herokuapp.com/";
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

async function handleSubmit(event) {
    event.preventDefaut();
    console.log(form.query.value);
    const el = event.currentTarget;
    // turn the form off
    el.submit.disabled = true;
    // submit the search
    const recipes = await fetchRecipes(el.query.value);
    console.log(recipes);
    el.submit.disabled = false;
  }

form.addEventListener(`submit`, handleSubmit);
fetchRecipes("pizza");
