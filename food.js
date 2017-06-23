// Food Database requests
//searching only within food database (not recipe analysis)

// Nutrition-data-api
// app_id = e6475bcd
// app_key = 0496691f788a39d097dfd6fb0af61f0f
// ingr =
// example of request "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"

// https://api.edamam.com/api/nutrition-data?app_id=e6475bcd&app_key=0496691f788a39d097dfd6fb0af61f0f&ingr=1%20large%20apple

// Recipe-data-api
// app_id = 5e5c7eae
// app_key = e796fa8651cb2d2180a5089c5bde56e6
// ingr =
// example of request "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"

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

//function addRecipeApiData(){}


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
				<h3 class="food-name"> ${foodName} </h3>`;

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

			html += `<div class="${label.toLowerCase()}">${label} ${nutrient.quantity.toFixed(2)}${unit}</div>`;
		} else {
			html += `<div class="${label.toLowerCase()}">${label} 0${unit}</div>`;
		}
	});



	html += '</div>';

	console.log(html);
	return html;
}
//function displayRecipeSearchData() {}


function findNutritionData(state)/* find data from state*/ {
	//console.log(state)
	const nutrientKeys = Object.keys(state.nutrition);// array of keys
	//console.log(nutrientKeys);
  // var results = nutrientKeys.map(function(fact, index) {
  // 	//console.log(state.nutrition.totalNutrients[fact])
  //   return renderNutritionSearchData();
  // });
  
 $('.nutritional-data').html(renderNutritionSearchData);
}
//			Event Listener

//Listen for user clicking submit button
//Get recipe data from API  


// // function getRecipeDataFromApi(searchTerm, callback, endpointUrl) {
//   var query = {
// 		app_id: '5e5c7eae',
// 		app_key: 'e796fa8651cb2d2180a5089c5bde56e6',
// 		ingr: searchTerm
//   }
//   $.getJSON(endpointUrl, query, callback);
// // }

// Get API nutrition data
function getNutritionDataFromApi(searchTerm, callback, endpointUrl) {
  var query = {
		app_id: 'e6475bcd',
		app_key: '0496691f788a39d097dfd6fb0af61f0f',
		ingr: searchTerm,
  }
  $.getJSON(endpointUrl, query, callback);
}

// might not return food because requires 
//Always include quantity and measure in the reques. 
//Submitting ‘1 large apple’ vs. submitting just ‘apple’

// Display a message to the user when enters bad request
function watchSubmit() {
	$('.js-search-form').submit(function(event) {
    event.preventDefault();
    //console.log("prevent default happened");
    //const nutritionDataUrl = $(event.currentTarget).attr('action')
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getNutritionDataFromApi(query, addNutritionApiData, NUTRITION_URL);
  });
}

//Listen for user clicking recipe link
//display recipe view
//function goToRecipe() {}

//Listen for user clicking Return Button to return to original results view
//function returnToResults() {}


// 			Doc.Ready

$(watchSubmit());




