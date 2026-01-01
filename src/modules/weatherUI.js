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
