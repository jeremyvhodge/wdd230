// select HTML elements in the document
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDescription = document.getElementById('weather-description');

// Set the API key for OpenWeatherMap
const apiKey = '060b733ef13de96aa1612494dd5569c1';

// Set the city ID for the weather data
const cityId = '5861897'; 


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

       
        // Check if wind speed is greater than or equal to 3 mph and temperature is less than or equal to 50°F
       
        const liveIcon = data.weather[0].icon;

        weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${liveIcon}@2x.png`);

        currentTemp.textContent = temperature 

        weatherDescription.textContent = data.weather[0].description;

        // Update the HTML elements with the weather data
        // weatherDescription.textContent = weatherConditionData;
        
        
    })
    .catch((error) => {
        // Log an error message if fetching weather data fails
        console.log('An error occurred while fetching weather data:', error);

        // Display a message indicating the failure to fetch weather data
        
    });
    


    

    





    