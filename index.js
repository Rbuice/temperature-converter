function convertToCelsius(Faren) {
  return ((Faren - 32) * 5) / 9;
}
function describeTemperature(Faren) {
  let celsius = convertToCelsius(Faren);
  if (celsius < 0) {
    return Faren + " Fahrenheit is " + celsius + " Celsius and is very cold.";
  } else if (celsius < 20) {
    return Faren + " Fahrenheit is " + celsius + " Celsius and is cold.";
  } else if (celsius < 30) {
    return Faren + " Fahrenheit is " + celsius + " Celsius and is warm.";
  } else if (celsius < 40) {
    return Faren + " Fahrenheit is " + celsius + " Celsius and is hot.";
  } else if (celsius >= 40) {
    return Faren + " Fahrenheit is " + celsius + " Celsius and is very hot.";
  }
}
let temp = prompt("Enter a temperature in Fahrenheit");
let respon = describeTemperature(temp);
alert(respon);
