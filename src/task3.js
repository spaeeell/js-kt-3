    /**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
    export function reverseArray(initialArray) {
    let start = 0;
    let end = initialArray.length - 1;

    while (start < end) {
        [initialArray[start], initialArray[end]] =
        [initialArray[end],
        initialArray[start]
        ];
        start++;
        end--;
    }

    console.log(initialArray);
}
