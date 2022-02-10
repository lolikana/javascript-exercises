const findTheOldest = function(value) {
  //Calcul and Push the oldest age in the array
  let peopleOldestAge = [];
  for (let age in value) {
    peopleOldestAge.push(value[age].yearOfDeath - value[age].yearOfBirth);
  };
  //Find index of oldest age in the peopleOldestAge's array
  //Push index's number in peopleAgeIndex's array
  let peopleAgeIndex = [];
  for (let i = peopleOldestAge.indexOf(Math.max.apply(null, peopleOldestAge));
          i >= 0;
          i = peopleOldestAge.indexOf(Math.max.apply(null, peopleOldestAge)+1))
            {
                peopleAgeIndex.push(i);
            };
  //Return name thanks to index array
  return value[peopleAgeIndex];
};

//first test PASSED

// Do not edit below this line
module.exports = findTheOldest;
