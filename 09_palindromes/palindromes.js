 const palindromes = function (num) {
 let regExp = /[\W_]/g; 

  //Lowercase string & combine so there's no whitespace
 let lowRegStr = num.toLowerCase().replace(regExp, '');

  //Stores the reversed lowRegStr in a variable to check if palindrome
 let reverseStr = lowRegStr.split('').reverse().join('');

 return reverseStr === lowRegStr;
};

/* diff syntax 

function palindromes(str) {
  let regExp = /[^A-Za-z0-9]/g;

  str = str.toLowerCase().replace(regExp, '');

  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; 
    }
  }
    return true;
}
*/
// Do not edit below this line
module.exports = palindromes;
