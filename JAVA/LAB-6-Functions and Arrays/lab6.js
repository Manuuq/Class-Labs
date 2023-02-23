// Iteration #1: Find the maximum

function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}
//or
const maxOfTwoNumbers = (a, b) => {
  return a > b ? a : a === b ? a : b;
}


// Iteration #2: Find longest word

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (arr) => {
  return arr.reduce((a, b) => a.length < b.length ? b : a);
}
//or
const findLongestWord2 = (arr) => {
  return arr.reduce((a, b) => a.length < b.length ? b : a.length === b.length ? a : b);
}


// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  return arr.reduce((a, b) => a + b)/ arr.length;
}

const averageNum = (arr) => {
  return (sumNumbers(arr) / arr.length).toFixed(2);
}


// Level 2: Array of strings

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

 //Shorter version
 function averageWordLength(arr) {
  return arr.join('').length / arr.length;      
 }

 // Iteration #5: Unique arrays

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {
  let uniqueStr = [];
  arr.forEach((element) => {
      if (!uniqueStr.includes(element)) {
          uniqueStr.push(element);
      }
  })
  return uniqueStr;
}

// Iteration #6: Find elements

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, str) {
  return arr.includes(str)? true : false;
}



// Iteration #7: Count repetition

const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, str) {
  let count = 0;
  arr.forEach(e => {
    str === e ? count++ : 0;
  })
    return count;
}

function greatestProduct() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
