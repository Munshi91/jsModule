// const names = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'gabul', 'cabul'];
// function removeDuplicate(names) {
//   const unique = [];
//   for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     console.log(name);
//     if (unique.includes(name) === false) {
//       unique.push(name);
//     }
//   }
//   return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

/* 1-50 show output*/
/* if the number is divisible by 3 then instead of the number show 'foo' */
/* if the number is divisible by 5 then instead of the number show 'bar' */
/* if the number is divisible by both 3 and 5  then instead of the number show 'foobar' */

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log('foo');
//   } else if (i % 5 === 0) {
//     console.log('bar');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('foobar');
//   } else {
//     console.log(i);
//   }
// }

// function funcName() {
//   console.log("hello Functions");
// }
// funcName();
// function sumMachine(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(sumMachine(2, 6));
// console.log(sumMachine(27, 636));

/******************************
 Programming Hero Problem Solve
 ******************************/

/* javascript Problem Solve 1 */

/* function cubeNumber(numbers) {
  let number = 0;

  for (let i = 1; i <= numbers; i++) {
    number = Math.pow(i, 3);
    // number = i ** 3;
  }
  return number;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4)); */

/* javascript Problem Solve 1 simple way */

/* function cubeNumber(numbers) {
  if (typeof numbers === "number") {
    return numbers ** 3;
  } else if (typeof numbers === "string") {
    return "Error: Input should be a number.";
  } else {
    return "Error: Input should be a number.";
  }
}
console.log(cubeNumber(3));
console.log(cubeNumber(4));
console.log(cubeNumber("hello")); */

/* javascript Problem Solve 2 */

/* function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Inputs Should be strings.";
  }

  const matchWordFinder = string2.split(" ");
  for (const word of matchWordFinder) {
    if (string1.includes(word)) {
      return true;
    }
  }
  return false;
}
console.log(matchFinder("hello", "llo"));
console.log(matchFinder("hello", "hello"));
console.log(matchFinder("apple", "orange"));
console.log(matchFinder("javascript", "code"));
console.log(matchFinder("peter parker", "pen"));
console.log(matchFinder("Peter parker", "pet"));
console.log(matchFinder(23, 45));
 */

/* javascript Problem Solve 3 */

// function sortMaker(arr) {
//   if (arr[0] < 0 || arr[1] < 0) {
//     return "invalid input";
//   } else if (arr[0] === arr[1]) {
//     return "equal";
//   } else if (arr[0] > 0 && arr[1] > 0) {
//     if (arr[0] < arr[1]) {
//       let temp = arr[0];
//       arr[0] = arr[1];
//       arr[1] = temp;
//     }
//     return arr;
//   } else {
//     return "invalid input";
//   }
// }
// let result1 = [5, 10];
// let result2 = [5, 5];
// let result3 = [-3, 8];
// console.log(sortMaker(result1));
// console.log(sortMaker(result2));
// console.log(sortMaker(result3));

/* javascript Problem Solve 4 */

//  event and odd function
// function isEven(number) {
//   const remainder = number % 2;
//   if (remainder === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const myNumberIsEven = isEven(23);
// console.log(myNumberIsEven);

// const herNumberIsEvent = isEven(230);
// console.log(herNumberIsEvent);

//Calculate Sum of all numbers of an array
/* function getSumOfAnArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
}

const myNumbers = [12, 65, 35, 47, 58, 98, 86, 87];
getSumOfAnArray(myNumbers); */

/* Calculate Factorial of a number using for loop */
// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   sum = sum + i;
//   console.log(i, sum);
// }
// function sumOfNumber(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//     console.log(i, sum);
//   }
//   return sum;
// }
// sumOfNumber(45);

/* Factorial using a while loop */
/* function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i);
  }
  return result;
}
const number = 5;
const fact = factorial(number);
console.log("factorial of", number, fact); */

/* Swap variable, swap without temp */
// function swapVariables(a, b) {
//   let temp = a;
//   a = b;
//   b = temp;
//   return [a, b];
// }

// // Example usage
// let num1 = 5;
// let num2 = 10;
// console.log("Before swap: num1 =", num1, "num2 =", num2);

// [num1, num2] = swapVariables(num1, num2);
// console.log("After swap: num1 =", num1, "num2 =", num2);

/* javascript Problem Solve 4 */

/* function findAddress(obj) {
  const result = {};

  if (obj.hasOwnProperty("street")) {
    result.street = obj.street;
  } else {
    result.street = "__";
  }

  if (obj.hasOwnProperty("house")) {
    result.house = obj.house;
  } else {
    result.house = "__";
  }

  if (obj.hasOwnProperty("society")) {
    result.society = obj.society;
  } else {
    result.society = "__";
  }

  return result;
}

// Example usage
const input1 = { street: "123 Main St", house: "A-1", society: "Green Valley" };
const input2 = { street: "456 Elm Rd", society: "Hillside Apartments" };
const input3 = { society: "Sunset Heights" };

const output1 = findAddress(input1);
const output2 = findAddress(input2);
const output3 = findAddress(input3);

console.log(output1.street, output1.house, output1.society);
console.log(output2.street, output2.house, output2.society);
console.log(output3.street, output3.house, output3.society); */

/* javascript Problem Solve 5 */

// function canPay(changeArray, totalDue) {
//   if (changeArray.length === 0) {
//     return false;
//   }
//   let sum = 0;
//   for (let i = 0; i < changeArray.length; i++) {
//     sum += changeArray[i];
//   }

//   return sum === totalDue;
// }

// // Example usage
// const expenses = [25, 25, 50, 20];
// const targetAmount = 120;
// console.log(canPay(expenses, targetAmount));

/* javascript Problem Solve 4 */

// function findAddress(obj) {
//   if (typeof obj !== 'object') {
//     return 'please provide me a valid object';
//   } else {
//     const street = obj.street || '__';
//     const house = obj.house || '__';
//     const society = obj.society || '__';
//     // console.log(street, house, society);
//     return '' + street + ' ' + house + '' + society + '';
//   }
// }
// const obj = {
//   street: '123 Main St',
//   house: 'A-1',
//   society: 'Green Valley',
// };
// console.log(findAddress(obj));

/* javascript Problem Solve 3 */

// function sortMaker(arr) {
//   if (arr[0] < 0 || arr[1] < 0) {
//     return 'invalid input';
//   } else if (arr[0] === arr[1]) {
//     return 'equal';
//   } else if (arr[0] > 0 && arr[1] > 0) {
//     if (arr[0] < arr[1]) {
//       let temp = arr[0];
//       arr[0] = arr[1];
//       arr[1] = temp;
//     }
//     return arr;
//   } else {
//     return 'invalid input';
//   }
// }
// let result1 = [5, 10];
// let result2 = [7, 7];
// let result3 = [-3, 8];
// console.log(sortMaker(result1));
// console.log(sortMaker(result2));
// console.log(sortMaker(result3));

/* javascript Problem Solve 2 */

// function matchFinder(string1, string2) {
//   if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//     return 'Inputs Should be strings.';
//   }

//   const matchWordFinder = string2.split(' ');
//   for (const word of matchWordFinder) {
//     if (string1.includes(word)) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(matchFinder('hello', 'llo'));
// console.log(matchFinder('hello', 'hello'));
// console.log(matchFinder('apple', 'orange'));
// console.log(matchFinder('javascript', 'code'));
// console.log(matchFinder('peter parker', 'pen'));
// console.log(matchFinder('Peter parker', 'pet'));
// console.log(matchFinder(23, 45));

/* javascript Problem Solve 1 */

// function cubeNumber(numbers) {
//   if (typeof numbers === 'number') {
//     return numbers ** 3;
//   } else if (typeof numbers === 'string') {
//     return 'Error: Input should be a number.';
//   } else {
//     return 'Error: Input should be a number.';
//   }
// }
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
// console.log(cubeNumber('hello'));
