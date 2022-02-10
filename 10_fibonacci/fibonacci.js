//2022-02-10
//thanks wikipedia fibonacci
const fibonacci = function(num) {
  if (parseFloat(num) === 0) {
    return 0
  } else if (parseFloat(num) === 1) {
    return 1
  } else if (parseFloat(num) < 0) {
    return "OOPS"
  } else {
    //sum(6)
    //sum(n - 1) = n - 1 + sum(n - 2) = 15 // ????????????????????
    //sum(n - 2) = n - 2 + sum(n - 3) = 10 //sum(n - 2) = n - 2 + sum(n - 3) = 10
    //sum(n - 3) = n - 3 + sum(n - 4) = 6  //sum(n - 3) = n - 3 + sum(n - 4) = 6
    //sum(n - 4) = n - 4 + sum(n - 5) = 3  //sum(n - 4) = n - 4 + sum(n - 5) = 3
    //sum(n - 5) = n - 5 + sum(n - 6) = 1  //sum(n - 5) = n - 5 + sum(n - 6) = 1
    return (fibonacci(parseFloat(num)-1) + fibonacci(parseFloat(num)-2))
  }
 };

// Do not edit below this line
module.exports = fibonacci;

/*
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b; // temp = 1  --> temp = 1   --> temp = 2  --> temp = 3
    b = a + b;  //     b = 0 + 1 --> b = 1 + 1  --> b = 2 + 1 --> b = 3 + 2
    a = temp;  //      a = 1     --> a = 1      --> a = 2     --> a = 3
  }
  return b;
};
*/
