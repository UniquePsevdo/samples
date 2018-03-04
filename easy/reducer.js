/*
function reduce(arr, fn, val){
    for(let i=0; i < arr.length; i++){
        val = fn(val, arr[i], i, arr)
    }
    return val
}
*/

function reduce(arr, fn, val){
    for(let i =0; i < arr.length; i++){
        val = fn(val, arr[i])
    }
    return val;
}

import {test} from 'ava'

test(t=>t.is(reduce([1, 2, 3, 4], (result, current)=>{
    return result + current
}, 0), 10))