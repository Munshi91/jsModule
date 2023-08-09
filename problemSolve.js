//Taka to Dollar Convert

// function takaToDollar(taka) {
//   var dollar = taka * 0.0095;
//   return dollar;
// }
// var myTaka = 5000;
// var convertDollar = takaToDollar(myTaka);
// console.log(convertDollar);

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

function sortMaker(arr) {
  if (arr < 0 || arr < 0) {
    return "Error: Both values should be positive.";
  } else if (arr === arr) {
    return "equal";
  } else if (arr > 0 && arr > 0) {
    return [Math.max(arr), Math.min(arr)];
  } else {
    return "invalid input";
  }
}
console.log(sortMaker(5, 10));
