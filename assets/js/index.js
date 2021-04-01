'use strict';
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

//*** ver 1 ***   
const arr = [4, -2, 5, 19, -130, 0, 10];

/**
 * get maximum value from the array
 * @param {array} array 
 * @returns {number}
 */
function getMax(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > result) result = array[i];
  }
  return result;
}

/**
 * get minimum value from the array
 * @param {array} array 
 * @returns {number}
 */
function getMin(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) result = array[i];
  }
  return result;
}
console.log(`min : ${getMin(arr)};\nmax : ${getMax(arr)}`)

//*** ver 2 ***     

console.log(Math.min.apply(null, arr));
console.log(Math.max.apply(null, arr));

//*** ver 3 ***     

Array.prototype.min = getMinV3;
function getMinV3() {
  let result = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < result) result = this[i];
  }
  return result;
}

console.log("Version 3 min:", arr.min())


// if (!new.target) {
//   new Accumulator(startingValue);
// }