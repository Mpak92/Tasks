const convertTemperature = (celsius) => {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.80 + 32.00;
  const result = [kelvin, fahrenheit];
  return result;
};

const celsius = 36.50;

console.log(convertTemperature(celsius));
