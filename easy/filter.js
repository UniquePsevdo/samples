/*
function filter(arr, fn){
    let result = [];
    for(let i=0; i < arr.length; i++){
        let current = arr[i];
        if(fn(current)){
            result.push(current);
        }
    }
    return result;
}
*/

function filter(arr, fn){
    let result=[]
    for (let i = 0; i < arr.length; i++){
        if(fn(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

let arr = [1, 2, 4, 0, 55];

import {test} from 'ava'

test('filter lower than 3', t=>t.deepEqual(filter(arr, n => n < 3), [1,2,0]))


