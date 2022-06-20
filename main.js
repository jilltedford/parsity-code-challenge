// Problem 1:
const findSum = function (array) {

  let sum = 0;

  array.forEach(item => {
    sum += item;
  });

  return sum;
};

// console.log(findSum([2, 4, 6]));

// -------------------------------------------------------
// Problem 2: 
const findFrequency = function (array) {

  let obj = {
    most: 0,
    least: 0
  };

  let count = {};

  array.forEach(item => {
    if (count.hasOwnProperty(item)) {
      count[item] += 1;
    } else {
      count[item] = 1;
    }
  });

  // console.log(count);

  let minNumber = "";
  let minLetter = "";
  let maxNumber = "";
  let maxLetter = "";

  for (const prop in count) {

    if (minNumber === "") {
      minNumber = count[prop];
      minLetter = prop;
      maxNumber = count[prop];
      maxLetter = prop;
    }

    if (count[prop] >= maxNumber) {
      maxNumber = count[prop];
      maxLetter = prop;
    }

    if (count[prop] <= minNumber) {
      minNumber = count[prop];
      minLetter = prop;
    };

  };

  obj.most = maxLetter;
  obj.least = minLetter;

  return obj;

};

// console.log(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'])); // { most: 'a', least: 'd' }

// -------------------------------------------------------
// Problem 3:
const isPalindrome = function (str) {

  let lowerCaseStr = str.toLowerCase();
  let reverseStr = lowerCaseStr.split('').reverse().join('');

  return (reverseStr === lowerCaseStr);

};

// console.log(isPalindrome('canal'));
// console.log(isPalindrome('Ana'));

// -------------------------------------------------------
// Problem 4: 
let products = [];

const largestPair = function (array) {

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let nextNum = array[i + 1];

    let product = currentNum * nextNum;

    if (product) {
      products.push(product);
    }
    ;
  };

  let largestProduct = Math.max(...products);

  return largestProduct;
};

// console.log(largestPair([5, 1, 2, 3, 1, 4])); // 6
// console.log(largestPair([9, 5, 10, 2, 24, -1, -48])); // 50

// -------------------------------------------------------
// Problem 5:
const removeParenth = function (str) {

  let bracketCount = 0;
  let output = '';

  for (const letter of str) {

    if (letter === '(') {
      bracketCount += 1;

    } else if (letter === ')') {
      bracketCount -= 1;

    } else if (bracketCount === 0) {
      output += letter;
    };

  };

  return bracketCount === 0 ? output : '';

};

// console.log(removeParenth('ido(not)liketocode')); // 'idoliketocode'

// -------------------------------------------------------
// Problem 6: 
const scoreScrabble = function (str) {

  let number = 0;

  for (let i = 0; i < str.length; i++) {

    switch (str[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'l':
      case 'n':
      case 'r':
      case 's':
      case 't':
        number += 1;
        break;

      case 'd':
      case 'g':
        number += 2;
        break;

      case 'b':
      case 'c':
      case 'm':
      case 'p':
        number += 3;
        break;

      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        number += 4;
        break;

      case 'k':
        number += 5;
        break;

      case 'j':
      case 'x':
        number += 8;
        break;

      case 'q':
      case 'z':
        number += 10;
        break;

      default:
        number += 0;
        break;
    };

  };

  return number;

};

  // console.log(scoreScrabble('hello')); // 8
  // console.log(scoreScrabble('quiet')); // 14
