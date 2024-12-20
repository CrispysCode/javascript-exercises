const repeatString = function(input, times) {
let inputString = "";
if (times < 0) {
  inputString = "ERROR";
}
for (let i = 0; i < times; i++) {
  inputString += input;
}
return inputString;

};

// Do not edit below this line
module.exports = repeatString;
