// weatherService.js (ES module)
const apiKey = 'f39f961f2e958c38e522f032ee067343'; // Replace with your Weatherstack API key

export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}&units=m`);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const temperature = data.current.temperature;
        const description = data.current.weather_descriptions[0];

        return { temperature, description };
    } catch (error) {
        throw error;
    }
}
