import { multipliedByN } from "./task1.js";
import { calculateSum } from "./task2.js";
import { reverseArray } from "./task3.js";
import { hasCorrectElement } from "./task4.js";

const x = [1,2,3]
console.log(multipliedByN(x, 5));

const data = ['10', 'Строка', '5g', '15', '05'];
const result = calculateSum(data);
console.log(result);

const data2 = [1, 2, 3, 4, 5]
reverseArray(data2)
console.log(data2)

const array = [1, 2, 3, 4];

console.log(hasCorrectElement(array, (elem) => elem == 3)); // true
console.log(hasCorrectElement(array, (elem) => elem % 5 === 0)); // false
