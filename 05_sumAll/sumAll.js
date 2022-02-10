//2022-02-08

const iterationA = [];

const sumAll = function(a, b) {
  iterationA.length = 0;
  if (typeof a != 'number'
    || typeof b != 'number'
    || Array.isArray(a)
    || Array.isArray(b)) {
      iterationA.push("ERROR");
  } else if ((a < b && a > 0) && (a < b && b > 0)) {
    for (a; a <= b; a++) {
        iterationA.push(a);
    }
  } else if ((a > b && a > 0) && (a > b && b > 0)) {
    for (a; a >= b; a--) {
        iterationA.push(a);
    }
  } else {
    iterationA.push("ERROR");
  }

  let sum = 0;
  if (iterationA != "ERROR") {
    for (let i = 0; i < iterationA.length; i++) {
      sum += iterationA[i];
    }
  } else {
    sum = "ERROR";
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;

/*
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;
*/
