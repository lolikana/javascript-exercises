//2022-02-10
const getTheTitles = function(value) {
  let bookTitleArray = [];
  for (let titles in value){
    bookTitleArray.push(value[titles].title)
  };
  return bookTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;

/*
const getTheTitles = function(array) {
  return array.map(book => book.title);
};

module.exports = getTheTitles;
*/
