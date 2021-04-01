'use strict';
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

//*** ver 1 ***   
const arr = [4, -2, 5, 19, -130, 0, 10];
const arr2 = [12, 15, 20, 25, 59, 79];

/**
 * get maximum value from the array
 * @param {array} array 
 * @returns {number}
 */
function getMax(array) {
  if (!Array.isArray(array)) return;
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
  if (!Array.isArray(array)) return;
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) result = array[i];
  }
  return result;
}
console.log(`min : ${getMin(arr)};\nmax : ${getMax(arr)}`);

//*** ver 2 ***     

console.log('Math.min.apply:', Math.min.apply(null, arr));
console.log('Math.max.apply:', Math.max.apply(null, arr));

//*** ver 3 ***     

Array.prototype.min = getMinV3;
function getMinV3() {
  if (!Array.isArray(this)) return;
  let result = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < result) result = this[i];
  }
  return result;
}

console.log("Version 3 min:", arr.min());
console.log('arr.min() === arr2.min() = ', arr.min() === arr2.min());

/*
Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
*/
const arr3 = [12, 15, 20, 25, 59, 79];

function getAverage(array) {
  if (!Array.isArray(array)) return;
  let sum = null;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return (sum / array.length);
}
console.log('Average: ', getAverage(arr3));

/*
Работа с concat
Для решения задач данного блока вам понадобятся следующие методы: concat.
Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
*/
let arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
let concat = arr4.concat(arr5);
console.log('concat', concat);

/*Работа с reverse
Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/

let reverse = arr4.reverse();
console.log('reverse', reverse);

/* Работа с push, unshift  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.*/

let push = arr4.push(4, 5, 6);
let unshift = arr4.unshift(4, 5, 6);
console.log('push and unshift', push, unshift);



