'use strict';
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const arr = [4, -2, 5, 19, -130, 0, 10];

function getMax(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) result = array[i];
  }
  return result;
}

function getMin(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) result = array[i];
  }
  return result;
}
console.log(`min - ${getMin(arr)};\nmax ${getMax(arr)}`)



// if (!new.target) {
//   new Accumulator(startingValue);
// }