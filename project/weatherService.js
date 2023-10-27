const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80'; // Replace with your OpenWeatherMap API key

export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const temperature = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        return { temperature, description, humidity, windSpeed };
    } catch (error) {
        throw error;
    }
}
