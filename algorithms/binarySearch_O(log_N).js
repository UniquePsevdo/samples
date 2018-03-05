let arr = [-12, 0, 0.7, 3, 8, 87, 88, 4351];

/*
function bs(arr, val){
    let minIdx = 0,
        maxIdx = arr.length - 1,
        guessIdx;
    while(minIdx <= maxIdx){
        guessIdx = Math.floor((minIdx+maxIdx)/2)
        if(arr[guessIdx]===val){
            return guessIdx
        }else if(arr[minIdx]<arr[guessIdx]){
            minIdx = guessIdx + 1
        }else{
            maxIdx = guessIdx - 1
        }
    }
    return -1
};
*/

function bs(arr, val){
    let min = 0;
    let max = arr.length-1;
    let guess;
    while(min <= max){
        guess =Math.floor((min + max)/2);
        if(arr[guess]===val){
            return guess;
        }else if(arr[guess]<val){
            min = guess+1;
        }else{
            max = guess -1;
        }
    }
    return -1;
}

import { test } from 'ava';

test('index of 0 is 3', t => t.is(bs(arr, -12), 0))
