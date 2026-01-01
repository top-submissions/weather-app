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

/**
 * Initialize the application
 */
function initializeApp() {
  console.log('Weather App initialized');

  // Initialize UI event listeners
  initializeUI();

  // Search form submission
  const searchForm = document.getElementById('searchForm');
  const locationInput = document.getElementById('locationInput');

  searchForm.addEventListener('submit', e => {
    e.preventDefault();

    const location = locationInput.value.trim();

    if (location) {
      handleWeatherSearch(location);
    }
  });

  // Retry button click
  const retryBtn = document.getElementById('retryBtn');
  retryBtn.addEventListener('click', () => {
    const location = locationInput.value.trim() || DEFAULT_LOCATION;
    handleWeatherSearch(location);
  });

  // Load default location on page load
  handleWeatherSearch(DEFAULT_LOCATION);
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
