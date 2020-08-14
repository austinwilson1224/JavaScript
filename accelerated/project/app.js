'use-strit';

searchButton.addEventListener('click', searchWeather);


function searchWeather() {
    console.log(searchCity.value);
    var cityName = searchCity.value;
    if (cityName.trim().length == 0) {
        return alert('please enter a city name')
    }
    var http = new XMLHttpRequest();
    var apiKey = '2a4cd1aa0d21a9d50fe3358ff31d3f87';
    var url = 'api.openweathermap.org/data/2.5/weather?q=' + cityName + apiKey;
    var method = 'GET';
    http.open(method,url);
    http.onreadystatechange = function() {
        if (http.readyState == XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
        } else if (http.readyState == XMLHttpRequest.DONE) {
            console.log("something went wrong");
        }
    }
}