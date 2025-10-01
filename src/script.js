import { processWord } from "./tasks/task1.js"
import { getMultiplesOfThree } from "./tasks/task2.js"

function task1() {
    /**
     * Запросите у пользователя исходное слово и символ
     * для удаления. Используя цикл while или for, 
     * сформируйте новую строку без указанного символа вне 
     * зависимости от регистра. 
     * 
     * Пример: Арнольд, а -> рнльд
     * Пример: Арнольд, А -> рнльд
     * Пример: Идиллия, и -> длля
     * Пример: Погода, я -> Погода
     */
    const initialWord = prompt("Исходное слово")
    const ignoredCharacted = prompt("Символ для удаления")

    const result = processWord(initialWord, ignoredCharacted)

    alert(result)
}

function task2() {
    /**
     * Запросите у пользователя число. Используя цикл 
     * while или for, сформируйте строку с числами в 
     * диапазоне от 1 до этого числа, кратными числу 3,
     * указанными через запятую с пробелом.
     * 
     * Пример: 14 -> 3, 6, 9, 12
     * Пример: 15 -> 3, 6, 9, 12, 15
     * Пример: 4 -> 3
     * Пример: 2 -> <пустая строка>
     */

    const userInput = prompt("Число")

    const result = getMultiplesOfThree(userInput)

    prompt(result)
}

function executeTask(event) {
    if (event.target.tagName !== "BUTTON") {
        return
    }

    switch (event.target.dataset.id) {
        case "1":
            return task1
        case "2":
            return task2
    }
}

document.querySelector("#buttons").addEventListener('click', executeTask)
