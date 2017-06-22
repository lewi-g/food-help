// Food Database requests
//searching only within food database (not recipe analysis)
// path = https://api.edamam.com/api/nutrition-data
Nutrition-data-api
app_id = e6475bcd
app_key = 0496691f788a39d097dfd6fb0af61f0f
ingr =
example of request "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"

https://api.edamam.com/api/nutrition-data?app_id=e6475bcd&app_key=0496691f788a39d097dfd6fb0af61f0f&ingr=1%20large%20apple

Recipe-data-api
app_id = 5e5c7eae
app_key = e796fa8651cb2d2180a5089c5bde56e6
ingr =
example of request "https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple"

// 			State Object

const appState = {
	nutrition: [],
	recipes: []
}

const FOOD_SEARCH_URL = 'https://api.edamam.com/api/nutrition-data';

// 			State Mods

//Retrieve api data
//add data to state object
//function addNutritionApiData() {}
//function addRecipeApiData(){}


//			Render

//Select data we'll use in the html
//Insert Data into Html 
//function displayNutritionSearchData() {}
//function displayRecipeSearchData() {}

//			Event Listener

//Listen for user clicking submit button
//Search API for input info 
//Return API nutrition/recipe results
//function watchSubmit() {}

//Listen for user clicking recipe link
//display recipe view
//function goToRecipe() {}

//Listen for user clicking Return Button to return to original results view
//function returnToResults() {}

// 			Doc.Ready

//call watchSubmit



