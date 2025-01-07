const fibonacci = function(countArg) {
  let count;
  let fibArr = [0, 1];

  //Checks for negative numbers!
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg;
    }

  //Return expected results
  if (count < 0) return "OOPS";
  if (count == 0) return 0;

  for (let i = 2; i <= count; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  
  return fibArr[count];

};

// Do not edit below this line
module.exports = fibonacci;
