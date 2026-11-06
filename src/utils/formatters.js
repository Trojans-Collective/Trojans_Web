/**
 * Format date strings to editorial format (e.g., 'OCT 2024')
 */
export function formatEditorialDate(dateString) {
  if (!dateString) return 'ARCHIVAL';
  try {
    const [year, month] = dateString.split('-');
    if (!month) return year;
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthIndex = parseInt(month, 10) - 1;
    return `${months[monthIndex] || month} ${year}`;
  } catch {
    return dateString;
  }
}

/**
 * Format numbers with leading zeros (e.g., 1 -> '01', 9 -> '09')
 */
export function padIndex(number, digits = 2) {
  return String(number).padStart(digits, '0');
}
