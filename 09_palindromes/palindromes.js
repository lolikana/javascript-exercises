//2022-02-09
const palindromes = function (string) {
  let stringReverse = string.split("").reverse().join("");
  console.log(stringReverse.toLowerCase().replace(/[^\w]|_/g, ""))
  let stringSplit = string;
  console.log(stringSplit.toLowerCase().replace(/[^\w]|_/g, ""))
  if (stringReverse.toLowerCase().replace(/[^\w]|_/g, "") === stringSplit.toLowerCase().replace(/[^\w]|_/g, "")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

/*
const palindromes = function(string) {
  processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};
*/
