/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 *
 * @description Подсчет суммы элементов массива,
 * корректно переводимых из строки в численный вид.
 */

export function calculateSum(values) {
    if (values.length === 0) {
        throw new Error("Передан пустой массив");
    }

    const numericValues = values.filter((value) => !isNaN(Number(value))).map(Number);

    if (numericValues.length === 0) {
        throw new Error("Отсутствуют численные данные");
    }

    return numericValues.reduce((a, b) => a + b, 0);
}
