/*function tailFactorial(n, total) {
    switch (n) {
        case 0: return 1
        case 1: return total
        default: return tailFactorial(n - 1, n * total)
    }
}

function factorial(n) {
if (x < 0) throw Error("Cannot calculate factorial of a negative number");
    return tailFactorial(n, 1)
}*/

// суть заключается в том чтобы рекурсивно пройтись из хвоста tail до 1,
// в функции tailFactorial(n, total)
// n - это число для которого нужно вычислить факториал
// 1 передается в качестве инициализационного вызова параметра total
// n - факториал искомого числа в функции factorial
// total - параметр который накапливает итоговое значение

function factorial(n){
    return tailFactorial(n, 1);
}
function tailFactorial(n, total){
    switch(n){
        case 0:
            return 0;
        case 1:
            return total;
        default:
            return tailFactorial(n-1, n*total)
    }
}

import { test } from 'ava'

test('factorial of 5 is 120', t => t.is(factorial(5), 120))