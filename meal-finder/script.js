const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('single-meal');


// search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();


    // clear single meal
    single_mealEl.innerHTML = '';

    // get search item 
    const term = search.value;

    // console.log(term);
}

// event listeners
submit.addEventListener('click', searchMeal);