//2022-02-09

//  [°F] = [°C] × 9⁄5 + 32
//  [°C] = ([°F] − 32) × 5⁄9
const ftoc = function(tempFar) {
  const converFarToCel = (tempFar - 32) * 5 / 9;
  return parseFloat(converFarToCel.toFixed(1));
};

const ctof = function(tempCel) {
  const convertCelToFar = tempCel * 9 / 5 + 32;
  return parseFloat(convertCelToFar.toFixed(1));
};

console.log(ftoc(100));
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/*
const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};
*/
