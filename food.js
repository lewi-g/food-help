
// 			State Object

const appState = {
	nutrition: {},
	recipes: []
}

const NUTRITION_URL = 'https://api.edamam.com/api/nutrition-data';

// 			State Mods

//Retrieve api data
//add data to state object
function addNutritionApiData(data) {
	appState.nutrition = data.ingredients[0];
	findNutritionData(appState);
	console.log(appState.nutrition);
}

function deleteNutritionApiData(state) {
	 appState.nutrition = {};
}  

//			Render

//Select data we'll use in the html
//Insert Data into Html 
function renderNutritionSearchData(result) {
	//console.log(result);
	if (!appState.nutrition.parsed) {
		return `<div> This ingredient wasn't found</div>`;
	}

	let foodName = appState.nutrition.parsed[0].food;
	let nutritionArr = appState.nutrition.parsed[0].nutrients;
	let html = `<div class="nutrition-table">
				<h3 class="food-name"> Is <span class ="result">${foodName} </span>what you're looking for?</h3>
				<button type="button" class="yes">Yes!</button>
				<button type="button" class="no">No</button>`;

	const props = {
		ENERC_KCAL: {
			label: 'Energy',
			unit: 'kcal'
		},
		CHOCDF: {
			label: 'Carbs',
			unit: 'g'
		},
		PROCNT: {
			label: 'Protein',
			unit: 'g'
		},
		FAT: {
			label: 'Fat',
			unit: 'g'
		}
	};

	Object.keys(props).forEach(prop => {
		const { label, unit } = props[prop];

		if (nutritionArr[prop]) {
			const nutrient = nutritionArr[prop];

			html += `<div class="${label.toLowerCase()} hidden">${label} ${nutrient.quantity.toFixed(2)}${unit}</div>`;
		} else {
			html += `<div class="${label.toLowerCase()} hidden">${label} 0${unit}</div>`;
		}
	});

	html += '</div>';

	return html;
}
//function displayRecipeSearchData() {}


function findNutritionData(state)/* find data from state*/ {
	const nutrientKeys = Object.keys(state.nutrition);// array of keys
 	$('.nutritional-data').html(renderNutritionSearchData);
}
//			Event Listener

//Listen for user clicking submit button
//Get recipe data from API  




// Get API nutrition data
function getNutritionDataFromApi(searchTerm, callback, endpointUrl) {
  var query = {
		app_id: 'e6475bcd',
		app_key: '0496691f788a39d097dfd6fb0af61f0f',
		ingr: searchTerm,
  }
  $.getJSON(endpointUrl, query, callback);
}

// Display a message to the user when enters bad request
function watchSubmit() {
	$('.js-search-form').submit(function(event) {
    event.preventDefault();
    let fullQuery = $('input').map(function(){
    	return this.value;
    }).get().join('');
   // console.log(fullQuery);
   	$(event.currentTarget).find('.js-query').val('');
    getNutritionDataFromApi(fullQuery, addNutritionApiData, NUTRITION_URL);
    watchChoiceButton();
  });

}

function watchChoiceButton() {
	$('.nutritional-data').on ('click', 'button', function(event) {
		if ($(event.target).hasClass('yes')) {
			$(".hidden").removeClass("hidden");
		} else if ($(event.target).hasClass('no')) {
			deleteNutritionApiData(appState);
			$(".nutritional-data").empty();
		};
	});
}
//Listen for user clicking recipe link
//display recipe view
//function goToRecipe() {}

//Listen for user clicking Return Button to return to original results view
//function returnToResults() {}


// 			Doc.Ready
$(watchSubmit());





