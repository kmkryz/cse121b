// main.js

import { fetchWeatherData } from './project-weather.js';

const cityInput = document.getElementById('city-input');
const fetchWeatherBtn = document.getElementById('fetch-weather-btn');
const weatherOutput = document.getElementById('weather-output');

// Define a function to handle the click event
function handleFetchWeatherClick() {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city)
            .then(weatherInfo => {
                weatherOutput.innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${weatherInfo.temperature}°C</p>
                    <p>Description: ${weatherInfo.description}</p>
                `;
            })
            .catch(error => {
                console.error('Error:', error);
                weatherOutput.textContent = 'Error fetching weather data.';
            });
    }
}

// Attach the event listener to the button
fetchWeatherBtn.addEventListener('click', handleFetchWeatherClick);

