/*
function indexOf(arr, val){
    for(let i=0; i < arr.length; i++){
        if(arr[i]===val){
            return i;
        }
    }
    return -1;
}
*/

function indexOf(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}

import {test} from 'ava'

test('indexOf 5 equals 4', t => t.is(indexOf([1,2,3,4,5], 5), 4))