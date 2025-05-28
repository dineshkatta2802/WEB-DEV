let apikey = "207bf711c2d3ee39778207bf05af2e0c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weather_icon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        
        if (!response.ok) {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        const data = await response.json();
            console.log(data);

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/ph";

        // Change the icon based on weather condition
        const weatherCondition = data.weather[0].main;

        if (weatherCondition === 'Clouds') {
            weather_icon.src = 'clouds.png';
        } else if (weatherCondition === 'Clear') {
            weather_icon.src = 'clear.png';
        } else if (weatherCondition === 'Rain') {
            weather_icon.src = 'rain.png';
        } else if (weatherCondition === 'Drizzle') {
            weather_icon.src = 'drizzle.png';
        } else if (weatherCondition === 'Mist') {
            weather_icon.src = 'mist.png';
        } else {
            weather_icon.src = 'default.png'; // optional fallback
        }
    } catch (error) {
        alert("An error occurred while fetching the data.");
        console.error(error);
    }
}

searchbtn.addEventListener('click', () => {
    checkWeather(search.value);
});
