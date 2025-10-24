/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 * 
 * @description Подсчет суммы элементов массива, 
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
    let sum = 0;

    for (let value of values) {
        const numValue = Number(value);
        if (!Number.isNaN(numValue)) {
            sum += numValue;
        }
    }

  return 0
}
