
// const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80'; // Replace with your OpenWeatherMap API key

// export async function fetchWeatherData(city) {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

//         if (!response.ok) {
//             throw new Error('Failed to fetch weather data');
//         }

//         const data = await response.json();
//         const temperature = data.main.temp.toFixed(1);
//         const description = data.weather[0].description;
//         const humidity = data.main.humidity;
//         const windSpeed = data.wind.speed;

//         return { city, temperature, description, humidity, windSpeed }; // Include city name in the data
//     } catch (error) {
//         throw error;
//     }
// }

const apiKey = 'd354d22d1fdc9585f60e31bb1de88c80'; // Replace with your OpenWeatherMap API key

export async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        const temperatureCelsius = data.main.temp.toFixed(1);
        const temperatureFahrenheit = convertToFahrenheit(temperatureCelsius);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        return { city, temperatureCelsius, temperatureFahrenheit, description, humidity, windSpeed };
    } catch (error) {
        throw error;
    }
}

function convertToFahrenheit(celsius) {
    return ((celsius * 9) / 5 + 32).toFixed(1);
}
