const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const errorBox = document.getElementById('error');

searchBtn.addEventListener('click', searchRecipes);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') searchRecipes();
});

async function searchRecipes() {
  const query = searchInput.value.trim();
  if (!query) {
    showError('⚠️ Please enter a search term');
    return;
  }

  errorBox.textContent = '';
  results.innerHTML = '';

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    if (!response.ok) throw new Error('Failed to fetch data');

    const data = await response.json();
    if (!data.meals) {
      showError('❌ No recipes found');
      return;
    }

    renderRecipes(data.meals);
  } catch (err) {
    showError('🚨 Something went wrong. Check console for details.');
    console.error(err);
  }
}

function renderRecipes(meals) {
  results.innerHTML = '';
  meals.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    // Collect ingredients
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) ingredients.push(`${measure} ${ingredient}`);
    }

    let recipeLink = meal.strSource || meal.strYoutube || '#';
    const shortInstructions = meal.strInstructions.slice(0, 150);

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <button class="toggle-btn">Show Recipe</button>
      <div class="recipe-details" style="display:none;">
        <h4>Ingredients:</h4>
        <ul>${ingredients.map((ing) => `<li>${ing}</li>`).join('')}</ul>
        <h4>Instructions:</h4>
        <p class="instructions">${shortInstructions}...</p>
        <button class="read-more-btn">Read More</button>
        <a href="${recipeLink}" target="_blank">View Full Recipe</a>
      </div>
    `;

    const toggleBtn = card.querySelector('.toggle-btn');
    const details = card.querySelector('.recipe-details');
    const instr = card.querySelector('.instructions');
    const readMoreBtn = card.querySelector('.read-more-btn');

    let expanded = false;
    toggleBtn.addEventListener('click', () => {
      if (details.style.display === 'none') {
        details.style.display = 'block';
        toggleBtn.textContent = 'Hide Recipe';
      } else {
        details.style.display = 'none';
        toggleBtn.textContent = 'Show Recipe';
      }
    });

    readMoreBtn.addEventListener('click', () => {
      if (!expanded) {
        instr.textContent = meal.strInstructions;
        readMoreBtn.textContent = 'Show Less';
        expanded = true;
      } else {
        instr.textContent = shortInstructions + '...';
        readMoreBtn.textContent = 'Read More';
        expanded = false;
      }
    });

    results.appendChild(card);
  });
}
