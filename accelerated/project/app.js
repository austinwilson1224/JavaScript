'use-strict';

searchButton.addEventListener('click', searchWeather);


function searchWeather() {
    console.log(searchCity.value);
    //loadingText.sytle.display = 'block';
    loadingText.style.display = 'block';
    weatherBox.style.display = 'none';

    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('please enter a city name')
    }
    var http = new XMLHttpRequest();
    var apiKey = '2a4cd1aa0d21a9d50fe3358ff31d3f87';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey ; // 
    var method = 'GET';
    http.open(method,url);
    console.log(http);
    http.onreadystatechange = function() {
        console.log("test");
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
            weatherData.temperature = data.main.temp;
            updateWeather(weatherData);
            console.log(weatherData);
        } else if (http.readyState == XMLHttpRequest.DONE) {
            console.log("something went wrong");
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    loadingText.style.display = 'none';
    weatherBox.style.display = 'block';
}