// https://www.codewars.com/kata/opposite-number
const oppositeNumberSolution = (number) => number * -1;

// https://www.codewars.com/kata/basic-mathematical-operations
const basicMathematicalOperations = (operation, value1, value2) => {
  if (operation === "+") {
    return value1 + value2;
  }

  if (operation === "-") {
    return value1 - value2;
  }

  if (operation === "*") {
    return value1 * value2;
  }

  if (operation === "/") {
    return value1 / value2;
  }
};

//https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
const printArray = (array) => array.join(",");

//https://www.codewars.com/kata/transportation-on-vacation
const rentalCarCost = (daysRented) => {
  const dailyRentCost = 40;

  let total = dailyRentCost * daysRented;

  if (daysRented >= 7) {
    total -= 50;
  } else if (daysRented >= 3) {
    total -= 20;
  }

  return total;
};

//https://www.codewars.com/kata/calculating-with-functions
const calcWithFunctions = () => {
  //TO DO
};

//https://www.codewars.com/kata/get-the-middle-character
const getMiddle = (s) => {
  const middle = Math.floor(s.length / 2);

  return s.length % 2 === 0
    ? s.slice(middle - 1, middle + 1)
    : s.charAt(middle);
};

//https://www.codewars.com/kata/partition-on
const partition = () => {
  //TO DO
};

//https://www.codewars.com/kata/find-the-odd-int/
const findOdd = (arr) => {
  let result = 0;

  for (let num of arr) {
    result ^= num;
  }

  return result;
};

//https://www.codewars.com/kata/find-the-parity-outlier
const findOutlier = (arr) => {
  const evens = arr.filter((n) => n % 2 === 0);
  const odds = arr.filter((n) => n % 2 !== 0);

  return evens.length === 1 ? evens[0] : odds[0];
};

//...