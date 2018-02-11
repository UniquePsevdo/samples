/*let fibonacci = function(){
    let cache =[0, 1];
    let fib = function(index){
        let result = cache[index]
        if(typeof result!=='number'){
            result = fib(index-1) + fib(index-2)
        }
        return result;
    }
    return fib;
}();*/

let fibonacci = function(){
    let cache = [0, 1]
    let fib = function(idx){
        let result = cache[idx]
        if(typeof result !=='number'){
            result = fib(idx - 1) + fib(idx - 2)
            cache[idx] = result
        }
        return result
    }
    return fib
}()

import {test} from 'ava'
test(t=>t.is(fibonacci(5), 5))