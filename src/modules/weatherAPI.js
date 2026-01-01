// Weather API module - handles all API calls to Visual Crossing
// NOTE: Replace 'YOUR_API_KEY' with your actual Visual Crossing API key
const API_KEY = 'PFGBQZUYQN5UTMBJ4W8H6Z5F4';
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

/**
 * Fetch weather data from Visual Crossing API
 * @param {string} location - City name or coordinates
 * @returns {Promise<Object>} Weather data object
 * @throws {Error} If API request fails
 */
export async function fetchWeatherData(location) {
  try {
    // Construct API URL with parameters
    const url = `${BASE_URL}/${encodeURIComponent(location)}?unitGroup=us&key=${API_KEY}&contentType=json&include=current,days`;

    console.log('Fetching weather data for:', location);

    // Initially had `mode: cors` as an argument in `options` but found out that fetch function uses it by default
    const response = await fetch(url);

    // Check if response is ok
    if (!response.ok) {
      if (response.status === 400) {
        throw new Error('Location not found. Please enter a valid city name.');
      } else if (response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else if (response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      } else {
        throw new Error(`Failed to fetch weather data (${response.status})`);
      }
    }

    const data = await response.json();
    console.log('Raw API data:', data);

    return data;
  } catch (error) {
    // Handle network errors
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    }
    throw error;
  }
}
