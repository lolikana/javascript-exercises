const findTheOldest = function(value) {
  //Calcul and Push the age in the array
  let peopleAge = [];
  for (let age in value) {
    peopleAge.push(value[age].yearOfDeath - value[age].yearOfBirth);
  };
  //Find index of Oldest age in the peopleAge array and Push index's number
  let peopleAgePos = [];
  for (let i=peopleAge.indexOf(Math.max.apply(null, peopleAge));
          i >= 0; 
          i = peopleAge.indexOf(Math.max.apply(null, peopleAge)+1))
            {
                peopleAgePos.push(i);
            };
  return peopleAgePos
  //Return name thanks to array position

};

// Do not edit below this line
module.exports = findTheOldest;
