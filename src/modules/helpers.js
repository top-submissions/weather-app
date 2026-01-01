// Helper functions for temperature conversion and formatting
import { format, parseISO } from 'date-fns';

/**
 * Convert Fahrenheit to Celsius
 * @param {number} fahrenheit - Temperature in Fahrenheit
 * @returns {number} Temperature in Celsius
 */
export function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Convert Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/**
 * Round temperature to specified decimal places
 * @param {number} temp - Temperature value
 * @param {number} decimals - Number of decimal places (default: 0)
 * @returns {number} Rounded temperature
 */
export function roundTemp(temp, decimals = 0) {
  return Math.round(temp * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Format date using date-fns
 * @param {string} dateString - Date string to format (YYYY-MM-DD format)
 * @param {string} formatString - Format pattern (default: 'EEEE, MMMM d, yyyy')
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, formatString = 'EEEE, MMMM d, yyyy') {
  try {
    // Parse ISO date string (YYYY-MM-DD format)
    const date = parseISO(dateString);
    return format(date, formatString);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

/**
 * Get day of week abbreviation
 * @param {string} dateString - Date string (YYYY-MM-DD format)
 * @returns {string} Day abbreviation (e.g., 'Mon', 'Tue')
 */
export function getDayAbbreviation(dateString) {
  return formatDate(dateString, 'EEE');
}

/**
 * Map weather condition to Weather Icons class
 * @param {string} icon - Visual Crossing icon code
 * @returns {string} Weather Icons class name
 */
export function mapWeatherIcon(icon) {
  const iconMap = {
    'clear-day': 'wi-day-sunny',
    'clear-night': 'wi-night-clear',
    'partly-cloudy-day': 'wi-day-cloudy',
    'partly-cloudy-night': 'wi-night-alt-cloudy',
    cloudy: 'wi-cloudy',
    fog: 'wi-fog',
    wind: 'wi-strong-wind',
    rain: 'wi-rain',
    snow: 'wi-snow',
    sleet: 'wi-sleet',
    'snow-showers-day': 'wi-day-snow',
    'snow-showers-night': 'wi-night-alt-snow',
    'thunder-rain': 'wi-thunderstorm',
    'thunder-showers-day': 'wi-day-thunderstorm',
    'thunder-showers-night': 'wi-night-alt-thunderstorm',
  };

  return iconMap[icon] || 'wi-day-sunny';
}

/**
 * Determine theme based on weather conditions
 * @param {string} icon - Visual Crossing icon code
 * @param {string} conditions - Weather conditions description
 * @returns {string} Theme class name
 */
export function getWeatherTheme(icon, conditions) {
  const conditionsLower = conditions.toLowerCase();

  // Night theme
  if (icon.includes('night')) {
    return 'night';
  }

  // Rain theme
  if (
    icon.includes('rain') ||
    icon.includes('thunder') ||
    conditionsLower.includes('rain') ||
    conditionsLower.includes('storm')
  ) {
    return 'rain';
  }

  // Snow theme
  if (
    icon.includes('snow') ||
    icon.includes('sleet') ||
    conditionsLower.includes('snow') ||
    conditionsLower.includes('sleet')
  ) {
    return 'snow';
  }

  // Cloudy theme
  if (icon.includes('cloudy') || conditionsLower.includes('cloud')) {
    return 'cloudy';
  }

  // Clear/Sunny theme (default)
  return 'clear';
}

/**
 * Get UV Index description
 * @param {number} uvIndex - UV index value
 * @returns {string} UV description
 */
export function getUVDescription(uvIndex) {
  if (uvIndex <= 2) return 'Low';
  if (uvIndex <= 5) return 'Moderate';
  if (uvIndex <= 7) return 'High';
  if (uvIndex <= 10) return 'Very High';
  return 'Extreme';
}

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
