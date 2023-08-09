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

/* javascript Problem Solve 1 */

function cubeNumber(numbers) {
  let number = 0;

  for (let i = 1; i <= numbers; i++) {
    number = Math.pow(i, 3);
    // number = i ** 3;
  }
  return number;
}

console.log(cubeNumber(3));
console.log(cubeNumber(4));
