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

Array.prototype.min = getMin3;
function getMin3() {
  if (!Array.isArray(this)) return;
  let result = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < result) result = this[i];
  }
  return result;
}

console.log("Version 3 min:", arr.min());
console.log('arr.min() === arr2.min() = ', arr.min() === arr2.min());

//*** ver 4 ***    

function getMax4(array) {
  const result = array.sort((a, b) => { return b - a });
  return result[0];
}

console.log("Version 4 max:", getMax4(arr));



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

/*Работа с shift, pop
Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.*/

let arr6 = ['js', 'css', 'jq'];
console.log('shift -', arr6.shift(), '\npop -', arr6.pop());

/*Работа с slice
Для решения задач данного блока вам понадобятся следующие методы: slice.
 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
*/

let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.slice(0, 3);
let arr9 = arr7.slice(3);
console.log('slice ', arr8, arr9);

/*Работа с splice
Для решения задач данного блока вам понадобятся следующие методы: splice.
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

arr7.splice(1, 2);
let arr10 = [1, 2, 3, 4, 5];
let arr11 = arr10.splice(1, 3);
let arr12 = [1, 2, 3, 4, 5];
arr12.splice(3, 0, 'a', 'b', 'c');
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(5, 0, 'c');
arr13.splice(8, 0, 'e');

console.log('splice [1, 4, 5] = ', arr7, '\n[2, 3, 4] = ', arr11,
  `\n[1, 2, 3, 'a', 'b', 'c', 4, 5] = `, arr12,
  `\n[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'] = `, arr13);


/* Работа с sort
  Для решения задач данного блока вам понадобятся следующие методы: sort.
  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/

let arr14 = [3, 4, 1, 2, 7];
console.log('sort : ', arr14.sort());

/**Работа с Object.keys
  Для решения задач данного блока вам понадобятся следующие методы: Object.keys.
  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.*/

const obj = { js: 'test', jq: 'hello', css: 'world' };
console.log('Object.keys: ', Object.keys(obj));

/* Дан массив с числами. Проверьте, что в этом массиве есть указанное число.
  Если есть - вернуть true, а если нет - вернуть false. */

const checkArr = [4, 2, 12, 64, 32, 23, 44, 1, 3, 23, 15, 4, 4, 12, 27, 7, 11, 94];

/**
 * func checks if there is a value in the array
 * @param {array} arr 
 * @param {number} val 
 * @returns {boolean} true if there is, false if not 
 */
function checkInclude(arr, val) {
  if (!Array.isArray(arr)) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

console.log('Check array', checkInclude(checkArr, 15));

/**Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд.
 * Если есть -  вернуть true, а если нет - вернуть false. */

/**
 * function checks if there are two equal values ​​in a row in the array
 * @param {array} arr 
 * @returns {boolean} true if there is, false if not 
 */
function checkEqual(arr) {
  if (!Array.isArray(arr)) return null;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] === arr[i]) return true;
  }
  return false;
}

console.log('Check equal', checkEqual(checkArr));
