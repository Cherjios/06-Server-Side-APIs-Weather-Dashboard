var cityList =$("#city-list");


var cities = [];

//Calling function init();
init();




//Function init();
function init(){
    //Get stored cities from localStorage
    //Parsing the JSON string to an object
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    // If cities were retrieved from localStorage, update the cities array to it
    if (storedCities !== null) {
        cities = storedCities;
      }
    // Render cities to the DOM
    renderCities();
}

//Function StoreCities()
function storeCities(){
   // Stringify and set "cities" key in localStorage to cities array
  localStorage.setItem("cities", JSON.stringify(cities));
}

//Function renderCities()
function renderCities() {
    // Clear todoList element and update todoCountSpan
    cityList.text = "";

    // Render a new li for each city
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      console.log(city);
  
      var li = $("<li>").text(city);
      li.attr("data-index", i);
      li.attr("class", "list-group-item");
      console.log(li);
  
      cityList.append(li);
    }
  }

  //When form is submitted...
  $("#add-city").on("click", function(event){
      event.preventDefault();

    // This line will grab the city from the input box
    var city = $("#city-input").val().trim();

    //Adding city-input to the city array
    cities.push(city);
    renderCities();

  });

