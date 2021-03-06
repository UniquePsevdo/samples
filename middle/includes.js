function includes(array, number) {
    return (binarySearch(array.sort(), number) > -1)
}

/*
function binarySearch(arr, val){
    let minIdx = 0,
        maxIdx = arr.length-1,
        guessIdx;
    while(minIdx<maxIdx){
        guessIdx = Math.floor((maxIdx+minIdx)/2)
        if(arr[guessIdx] === val){
            return guessIdx
        }else if(arr[minIdx]<arr[guessIdx]){
            minIdx = guessIdx + 1
        }else{
            maxIdx = guessIdx - 1
        }
    }
    return -1
}
*/

function binarySearch(arr, val){
    let minIdx = 0;
    let maxIdx = arr.length -1;
    let guess;
    while(minIdx <= maxIdx){
        guess = Math.floor((minIdx+maxIdx)/2);
        if(arr[guess]===val){
            return guess;
        }else if(arr[guess] < val){
            minIdx = guess +1;
        }else{
            maxIdx = guess - 1;
        }
    }
    return -1;
}
const arr = [8, 87, 3, 0, -12, 88, 4351, 0.7];

import {test} from 'ava';
test(t=>t.is(includes(arr, 0), true));
