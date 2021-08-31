// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Please round to 5dp (use Math.round())

export function convertToCelsius(temp: number): number {
  const celsius = Math.round((temp - 32) * (5 / 9) * 1e5) / 1e5;
  return celsius;
}

export function weatherInfo(temp: number): string {
  const c = convertToCelsius(temp);
  if (c < 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}
