// Weather UI module - handles all DOM manipulation and display
import {
  roundTemp,
  formatDate,
  getDayAbbreviation,
  mapWeatherIcon,
  getWeatherTheme,
  fahrenheitToCelsius,
  getUVDescription,
} from './helpers.js';

// Current temperature unit ('fahrenheit' or 'celsius')
let currentUnit = 'fahrenheit';

// Store current weather data for unit conversion
let currentWeatherData = null;

/**
 * Show loading spinner
 */
export function showLoading() {
  const spinner = document.getElementById('loadingSpinner');
  const weatherDisplay = document.getElementById('weatherDisplay');
  const errorMessage = document.getElementById('errorMessage');

  spinner.classList.add('active');
  weatherDisplay.classList.remove('active');
  errorMessage.classList.remove('active');
}

/**
 * Hide loading spinner
 */
export function hideLoading() {
  const spinner = document.getElementById('loadingSpinner');
  spinner.classList.remove('active');
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
export function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  const errorText = errorMessage.querySelector('.error-text');
  const weatherDisplay = document.getElementById('weatherDisplay');
  const spinner = document.getElementById('loadingSpinner');

  errorText.textContent = message;
  errorMessage.classList.add('active');
  weatherDisplay.classList.remove('active');
  spinner.classList.remove('active');
}

/**
 * Hide error message
 */
export function hideError() {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.classList.remove('active');
}

/**
 * Convert temperature based on current unit
 * @param {number} temp - Temperature in Fahrenheit
 * @returns {number} Converted temperature
 */
function convertTemp(temp) {
  if (currentUnit === 'celsius') {
    return roundTemp(fahrenheitToCelsius(temp));
  }
  return roundTemp(temp);
}

/**
 * Get temperature unit symbol
 * @returns {string} Temperature unit symbol
 */
function getTempUnit() {
  return currentUnit === 'celsius' ? '°C' : '°F';
}

/**
 * Get current temperature unit
 * @returns {string} Current unit ('fahrenheit' or 'celsius')
 */
export function getCurrentUnit() {
  return currentUnit;
}

/**
 * Update 7-day forecast display
 * @param {Array} forecast - Array of forecast day objects
 */
function updateForecast(forecast) {
  const forecastGrid = document.getElementById('forecastGrid');
  forecastGrid.innerHTML = '';

  forecast.forEach((day, index) => {
    const dayName = index === 0 ? 'Today' : getDayAbbreviation(day.datetime);
    const iconClass = mapWeatherIcon(day.icon);
    const highTemp = convertTemp(day.tempMax);
    const lowTemp = convertTemp(day.tempMin);

    const forecastCard = document.createElement('div');
    forecastCard.className = 'forecast-card';
    forecastCard.innerHTML = `
      <div class="forecast-day">${dayName}</div>
      <i class="wi forecast-icon ${iconClass}"></i>
      <div class="forecast-temps">
        <span class="forecast-high">${highTemp}°</span>
        <span class="forecast-low">${lowTemp}°</span>
      </div>
    `;

    forecastGrid.appendChild(forecastCard);
  });
}

/**
 * Update page theme based on weather conditions
 * @param {string} icon - Weather icon code
 * @param {string} conditions - Weather conditions description
 */
function updateTheme(icon, conditions) {
  const theme = getWeatherTheme(icon, conditions);
  const body = document.body;

  // Remove all theme classes
  body.classList.remove('clear', 'cloudy', 'rain', 'snow', 'night');

  // Add new theme class
  body.classList.add(theme);

  console.log('Theme updated to:', theme);
}

/**
 * Update toggle button states
 */
function updateToggleButtons() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    if (btn.dataset.unit === currentUnit) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Update weather display with data
 * @param {Object} weatherData - Processed weather data
 */
export function updateWeatherDisplay(weatherData) {
  // Store data for unit conversion
  currentWeatherData = weatherData;

  const { location, currentWeather, forecast } = weatherData;

  // Update location and date
  document.getElementById('locationName').textContent = location.name;
  document.getElementById('currentDate').textContent = formatDate(
    currentWeather.datetime
  );

  // Update current temperature
  document.getElementById('currentTemp').textContent = convertTemp(
    currentWeather.temp
  );
  document.getElementById('feelsLike').textContent = convertTemp(
    currentWeather.feelsLike
  );

  // Update temperature unit displays
  const tempUnits = document.querySelectorAll('.temp-unit');
  tempUnits.forEach(unit => {
    unit.textContent = getTempUnit();
  });

  // Update weather icon
  const iconClass = mapWeatherIcon(currentWeather.icon);
  const currentIcon = document.getElementById('currentIcon');
  currentIcon.className = `wi weather-icon ${iconClass}`;

  // Update weather description
  document.getElementById('weatherDescription').textContent =
    currentWeather.conditions;

  // Update weather details
  document.getElementById('humidity').textContent = `${roundTemp(
    currentWeather.humidity
  )}%`;
  document.getElementById('windSpeed').textContent = `${roundTemp(
    currentWeather.windSpeed
  )} mph`;
  document.getElementById('pressure').textContent = `${roundTemp(
    currentWeather.pressure
  )} mb`;
  document.getElementById('uvIndex').textContent = `${roundTemp(
    currentWeather.uvIndex
  )} (${getUVDescription(currentWeather.uvIndex)})`;

  // Update forecast
  updateForecast(forecast);

  // Update theme
  updateTheme(currentWeather.icon, currentWeather.conditions);

  // Show weather display
  const weatherDisplay = document.getElementById('weatherDisplay');
  weatherDisplay.classList.add('active');

  // Hide loading and error
  hideLoading();
  hideError();
}

/**
 * Initialize UI event listeners
 */
export function initializeUI() {
  // Temperature toggle buttons
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const unit = btn.dataset.unit;
      if (unit !== currentUnit) {
        currentUnit = unit;
        updateToggleButtons();
        if (currentWeatherData) {
          updateWeatherDisplay(currentWeatherData);
        }
      }
    });
  });
}
