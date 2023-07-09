// Set the API key for OpenWeatherMap
const apiKey = '4293dfdfd083fe975f3168edacefc53b';
// Set the API key for OpenWeatherMap

// Set the city ID for the weather data
const cityId = '5334223'; 

// Get the element for displaying the weather description
const weatherDescription = document.getElementById('weather-description');

// Get the element for displaying the humidity
const humidity = document.getElementById('humidity');

// Get the element for displaying the weather icon
const weatherIcon = document.getElementById('weather-icon');

// Get the element for displaying the current temperature
const currentTemp = document.getElementById('current-temp');

// Get the element for displaying the three-day temperature forecast
const forecastContainer = document.getElementById('forecast');

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Extract the temperature in Fahrenheit from the received data
    const temperature = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);

    // Extract the humidity from the received data
    const humidityData = data.main.humidity;

    // Extract the weather condition description from the received data
    const weatherConditionData = data.weather[0].description;

    // Extract the weather icon code from the received data
    const weatherIconCode = data.weather[0].icon;

    // Update the HTML elements with the weather data
    currentTemp.textContent = temperature + ' °F';
    weatherDescription.textContent = weatherConditionData;
    humidity.textContent = humidityData + '%';
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIconCode}.png`);
  })
  .catch(error => {
    // Log an error message if fetching weather data fails
    console.log('An error occurred while fetching weather data:', error);

    // Display a message indicating the failure to fetch weather data
    weatherDescription.textContent = 'Failed to fetch weather data';
  });

// Fetch three-day forecast data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
     // Extract temperature forecast for the next three days
    const forecastData = data.list.filter((forecast, index) => index % 8 === 0 && index < 24); // Filter data for 24-hour intervals and limit to 3 days
    const forecastByDay = {};

    forecastData.forEach(forecast => {
      const forecastDate = new Date(forecast.dt_txt);
      const day = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
      const temperature = Math.round((forecast.main.temp - 273.15) * (9 / 5) + 32);

      if (!forecastByDay[day]) {
        forecastByDay[day] = {
          temperatures: [],
        };
      }

      forecastByDay[day].temperatures.push(temperature);
    });

    // Calculate average temperature for each day
    const averageTemperatures = [];

    for (const day in forecastByDay) {
      const temperatures = forecastByDay[day].temperatures;
      const averageTemperature = Math.round(
        temperatures.reduce((sum, temperature) => sum + temperature, 0) / temperatures.length
      );
      averageTemperatures.push({ day, temperature: averageTemperature });
    }

    // Create HTML elements for each day's forecast
    averageTemperatures.forEach(({ day, temperature }) => {
      const forecastElement = document.createElement('p');
      forecastElement.textContent = `${day}: ${temperature} °F`;
      forecastContainer.appendChild(forecastElement);
    });
  })
  .catch(error => {
    // Log an error message if fetching forecast data fails
    console.log('An error occurred while fetching forecast data:', error);

    // Display a message indicating the failure to fetch forecast data
    forecastContainer.textContent = 'Failed to fetch forecast data';
  });