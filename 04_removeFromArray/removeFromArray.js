//2022-02-08

const removeFromArray = function(myArray, ...remove) {
  return myArray.filter(value => !remove.includes(value));
}
/*
  for( let i = 0; i < myArray.length; i++){

       if ( myArray[i] === value) {
           myArray.splice(i, 1);
           i--;
       }
   }
   return myArray
};
/*
var i = 0;
while (i < myArray.length) {
  if (myArray[i] === value) {
    myArray.splice(i, 1);
  } else {
    ++i;
  }
}
return myArray;
}
*/
// Do not edit below this line
module.exports = removeFromArray;
