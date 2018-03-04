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

let fibonacci = function (){
    let cache = [0, 1];
    return function fib(idx){
        let result;
        if(typeof cache[idx] === 'number'){
            result = cache[idx];
        }else{
            result = fib(idx - 1) + fib(idx - 2);
            cache[idx] = result;
        }
        return result;
    }
}();

import {test} from 'ava'
test(t=>t.is(fibonacci(5), 5))