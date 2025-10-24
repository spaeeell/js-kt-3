/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined} 
 * 
 * @description Разворот массива на месте с выводом в консоль
 */
function reverseArray(initialArray) {
    let start = 0;
    let end = initialArray.length - 1;

    while (start < end) {
        const temp = initialArray[start];
        initialArray[start] = initialArray[end];
        initialArray[end] = temp;

        start++;
        end--;
    }

    console.log(initialArray); 
}
