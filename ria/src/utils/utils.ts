export function formatTemperature(temperature: number): string {
  return Math.round(temperature) + 'C°';
}

// Function to format the hour from a Unix timestamp
export function formatHour(dateString: string): string {
  // Create a new Date object from the timestamp
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

export function formatDate(inputDate: string): string {
  // Parse the input date string into a Date object
  const date = new Date(inputDate);

  // Create an Intl.DateTimeFormat instance for formatting the date
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',   // abbreviated day of the week, e.g., "Mon"
    month: 'short',     // abbreviated month, e.g., "Aug"
    day: 'numeric'      // numeric day, e.g., "19"
  });

  // Format the date and return it
  return formatter.format(date);
}

export function capitalizeFirstLetter(inputString: string): string {
  if (!inputString) return inputString;  // Return the original string if it's empty

  // Capitalize the first letter and add the rest of the string unchanged
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}