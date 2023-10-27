import { fetchWeatherData } from './weatherservice.js';

const cityInput = document.getElementById('city-input');
const fetchWeatherBtn = document.getElementById('fetch-weather-btn');
const weatherOutput = document.getElementById('weather-output');

function createAndAppendElement(parent, tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
}

fetchWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city)
            .then(weatherInfo => {
                // Create a container for weather data
                const weatherContainer = document.createElement('div');
                weatherContainer.className = 'weather-container';

                // Create and append elements with data
                createAndAppendElement(weatherContainer, 'h2', `Weather in ${city}`);
                createAndAppendElement(weatherContainer, 'p', `Temperature: ${weatherInfo.temperature}°C / ${convertToFahrenheit(weatherInfo.temperature)}°F`);
                createAndAppendElement(weatherContainer, 'p', `Description: ${weatherInfo.description}`);
                createAndAppendElement(weatherContainer, 'p', `Humidity: ${weatherInfo.humidity}%`);
                createAndAppendElement(weatherContainer, 'p', `Wind Speed: ${weatherInfo.windSpeed} m/s`);

                // Replace the existing content in the weatherOutput with the new data
                weatherOutput.innerHTML = '';
                weatherOutput.appendChild(weatherContainer);
            })
            .catch(error => {
                console.error('Error:', error);
                weatherOutput.textContent = 'Error fetching weather data.';
            });
    }
});

// Function to convert temperature from Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
