export function getSum(a, b) {
    if (a === null) {
        throw new Error('Ввод числа А был отменен')
    }

    if (b === null) {
        throw new Error('Ввод числа B был отменен')
    }

    a = Number(a)
    b = Number(b)

    if (!Number.isFinite(a)) {
        throw new Error('Значение числа А некорректное')
    }

    if (!Number.isFinite(b)) {
        throw new Error('Значение числа B некорректное')
    }

    return a + b
}

