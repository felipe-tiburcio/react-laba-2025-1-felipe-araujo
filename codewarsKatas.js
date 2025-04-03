//https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let result = 0;

  for (let n of arr) {
    if (n > 0) {
      result += n;
    }
  }

  return result;
}

//https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let pairsCount = 0;

  for (let i = 0; i < ar.length - 1; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      pairsCount++;
    }
  }

  return pairsCount;
}

//https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

//https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 === 0);
}

//https://www.codewars.com/kata/5a090c4e697598d0b9000004
//TO DO

//https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  let resultArr = [];

  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }

  for (let i = 1; i < string.length; i += 2) {
    resultArr.push(string[i]);
  }

  return resultArr;
}

//https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  let tripletCopy = [...triplet];
  tripletCopy.sort((a, b) => a - b);

  return triplet.indexOf(tripletCopy[1]);
}

//https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  let arrStringValues = "";

  arr.forEach((n) => {
    arrStringValues += n;
  });

  return parseInt(arrStringValues, 2);
};

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

//https://www.codewars.com/kata/581e014b55f2c52bb00000f8
//TO DO

//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  let evenArr = array.filter((n) => n % 2 === 0);
  let oddArr = array.filter((n) => n % 2 !== 0);

  oddArr.sort((a, b) => a - b);

  let totalArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      totalArr.push(evenArr.shift());
    } else {
      totalArr.push(oddArr.shift());
    }
  }

  return totalArr;
}
