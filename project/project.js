import { fetchWeatherData } from './weatherService.js';

const cityInput = document.getElementById('city-input');
const fetchWeatherBtn = document.getElementById('fetch-weather-btn');
const weatherOutput = document.getElementById('weather-output');

fetchWeatherBtn.addEventListener('click', () => {
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
});
