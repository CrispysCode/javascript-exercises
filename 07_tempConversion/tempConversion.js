const convertToCelsius = function(num) {
  let fToC = (num - 32) / 1.8;
  return Math.round(fToC * 10) / 10;
};

const convertToFahrenheit = function(vnum) {
  let cToF = vnum * 1.8 + 32;
  return Math.round(cToF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
