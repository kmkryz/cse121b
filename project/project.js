import { fetchWeatherData } from './weatherservice.js';

const cityInput = document.getElementById('city-input');
const fetchWeatherBtn = document.getElementById('fetch-weather-btn');
const weatherOutput = document.getElementById('weather-output');

// array of set cities to display
const userCities = ['London', 'Paris', 'Berlin', 'Rome', 'Madrid'];

function createAndAppendElement(parent, tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}

fetchWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        if (!userCities.includes(city)) {
            userCities.push(city); // Add the city to the list if not already there
        }

        // Use the map method to fetch weather data for user-defined cities
        Promise.all(userCities.map(userCity => fetchWeatherData(userCity)))
            .then(weatherInfoList => {
                weatherOutput.innerHTML = '';
                weatherInfoList.forEach(weatherInfo => {
                    const weatherContainer = document.createElement('div');
                    weatherContainer.className = 'weather-container';
                    
                    createAndAppendElement(weatherContainer, 'h2', `Weather in ${weatherInfo.city}`);
                    createAndAppendElement(weatherContainer, 'p', `Temperature: ${weatherInfo.temperatureCelsius}°C / ${weatherInfo.temperatureFahrenheit}°F`);
                    createAndAppendElement(weatherContainer, 'p', `Description: ${weatherInfo.description}`);
                    createAndAppendElement(weatherContainer, 'p', `Humidity: ${weatherInfo.humidity}%`);
                    createAndAppendElement(weatherContainer, 'p', `Wind Speed: ${weatherInfo.windSpeed} m/s`);
                    
                    weatherOutput.appendChild(weatherContainer);
                });
            })
            .catch(error => {
                console.error('Error:', error);
                weatherOutput.textContent = 'Error fetching weather data.';
            });
    }
});
