/*function fib(n){
    switch(n){
        case 0:
            return 0
        case 1:
            return 1
        default: return fib(n-1) + fib(n-2)
    }
}*/

function fib (n){
    switch(n){
        case 0:
            return 0;
        case 1:
            return 1;
        default: return fib(n-1) + fib(n-2)
    }
}

import {test} from 'ava'

test('fibonacci 5-th index equal 5', t => t.is(fib(5), 5))