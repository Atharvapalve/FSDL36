// Fetch weather from OpenWeatherMap API and display the results
const weatherContainer = document.getElementById('weather-container');
const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');

// Your OpenWeatherMap API key (sign up at https://openweathermap.org/ to get one)
const apiKey = 'bb0498857a7f35fe68659e5d33a0cec1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      weatherInfo.innerHTML = '<p>City not found. Please try again.</p>';
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
    weatherInfo.innerHTML = '<p>There was an error fetching the weather.</p>';
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const icon = weather[0].icon;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}">
    <p class="temp">${temperature}°C</p>
    <p>${description}</p>
  `;
}

// Handle the search functionality
getWeatherButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Dark/Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});

// Fetch default weather for a default city (optional)
fetchWeather('New York');
