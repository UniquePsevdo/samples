/*
function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
*/

function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i=0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
const arr = [1, 45, 0, 4, 22, 11, 18]

import { test } from 'ava'
test(t =>{
    t.deepEqual(quickSort(arr), [0, 1, 4, 11, 18, 22, 45])
})