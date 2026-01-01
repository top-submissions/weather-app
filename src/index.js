// Main entry point for Weather App
import './css/styles.css';
import { getWeatherData } from './modules/weatherAPI.js';
import {
  initializeUI,
  showLoading,
  updateWeatherDisplay,
  showError,
} from './modules/weatherUI.js';

// Default location to show on page load
const DEFAULT_LOCATION = 'New York';

/**
 * Handle weather search
 * @param {string} location - Location to search for
 */
async function handleWeatherSearch(location) {
  try {
    // Show loading spinner
    showLoading();

    // Fetch and process weather data
    const weatherData = await getWeatherData(location);

    // Update UI with weather data
    updateWeatherDisplay(weatherData);
  } catch (error) {
    console.error('Error fetching weather:', error);

    // Show error message to user
    showError(error.message);
  }
}
