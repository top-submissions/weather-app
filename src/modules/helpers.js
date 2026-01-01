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
