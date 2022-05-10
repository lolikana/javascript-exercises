//2022-05-10

// const findTheOldest = function(value) {
//   //Calcul and Push the oldest age in the array
//   let peopleOldestAge = [];
//     for (let age in value) {
//       peopleOldestAge.push(value[age].yearOfDeath - value[age].yearOfBirth);
//     };
//     //Find index of oldest age in the peopleOldestAge's array
//     //Push index's number in peopleAgeIndex's array
//     let peopleAgeIndex = [];
//     for (let i = peopleOldestAge.indexOf(Math.max.apply(null, peopleOldestAge));
//             i >= 0;
//             i = peopleOldestAge.indexOf(Math.max.apply(null, peopleOldestAge)+1))
//               {
//                   peopleAgeIndex.push(i);
//               };
//     //Return name thanks to index array
//     return value[peopleAgeIndex];
//   };

// //first test PASSED

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    // yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = (array) => {
  let peopleAgeArray = [];
  let date = new Date().getFullYear();
  
  array.map(item => {
    if (item.yearOfBirth && item.yearOfDeath) {
      peopleAgeArray.push(
          item.yearOfDeath - item.yearOfBirth)
    } else if (item.yearOfDeath === undefined) {
      peopleAgeArray.push(
        date - item.yearOfBirth)
    }
  })
  console.log(peopleAgeArray)
  
  const peopleOldestIndex = peopleAgeArray.indexOf(Math.max(...peopleAgeArray))
  console.log(Math.max(...peopleAgeArray));
  
  console.log(array[peopleOldestIndex])

  console.log(array[peopleOldestIndex].name);
  
  return array[peopleOldestIndex]
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
