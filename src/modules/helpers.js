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
