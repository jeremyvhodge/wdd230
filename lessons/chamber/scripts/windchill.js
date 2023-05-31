// Set the API key for OpenWeatherMap
const apiKey = '060b733ef13de96aa1612494dd5569c1';

// Set the city ID for the weather data
const cityId = '5604045'; 

// Get the element for displaying the weather description
const weatherDescription = document.getElementById('weather-description');

// Get the element for displaying the wind speed
const windSpeed = document.getElementById('wind-speed');

// Get the element for displaying the wind chill
const windChill = document.getElementById('wind-chill');

// Fetch weather data from OpenWeatherMap API
fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`
)
    .then((response) => response.json())
    .then((data) => {
        // Extract the temperature in Fahrenheit from the received data
        const temperature = Math.round(
            (data.main.temp - 273.15) * (9 / 5) + 32
        );

        // Log the weather data to the console
        console.log('Weather Data: ', data);

        // Extract the wind speed from the received data
        const windSpeedData = data.wind.speed;

        // Calculate the wind chill based on temperature and wind speed
        const windChillData = calculateWindChill(temperature, windSpeedData);

        // Extract the weather condition description from the received data
        const weatherConditionData = data.weather[0].description;

        // Update the HTML elements with the weather data
        weatherDescription.textContent = weatherConditionData;
        windChill.textContent = windChillData + ' °F';
        windSpeed.textContent = windSpeedData + ' MPH';
    })
    .catch((error) => {
        // Log an error message if fetching weather data fails
        console.log('An error occurred while fetching weather data:', error);

        // Display a message indicating the failure to fetch weather data
        weatherDescription.textContent = 'Failed to fetch weather data';
    });

// Function to calculate the wind chill
function calculateWindChill(temperature, windSpeed) {
    // Convert wind speed from m/s to mph
    const windSpeedMph = windSpeed * 2.237;

    // Calculate wind chill using the given formula
    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * temperature * Math.pow(windSpeedMph, 0.16);

    // Round the wind chill value and return it
    return Math.round(windChill);
}