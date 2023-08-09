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
//     return "Error: Both values should be positive.";
//   } else if (arr[0] === arr[1]) {
//     return "equal";
//   } else if (arr[0] > 0 && arr[1] > 0) {
//     return [Math.max(arr[0]), Math.min(arr[1])];
//   } else {
//     return "invalid input";
//   }
// }
// console.log(sortMaker(100, 100));

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
function sumOfNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
