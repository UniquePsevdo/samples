/*function sort(arr){
    if(arr.length < 2){
        return arr
    }

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(sort(left), sort(right))
}

function merge(left, right){
    let leftIdx = 0,
        rightIdx = 0,
        result = []
    while(leftIdx<left.length && rightIdx < right.length){
        result.push(
            left[leftIdx] < right[rightIdx] ?
                left[leftIdx++]:
                right[rightIdx++]
        )
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}*/

function sort(arr){
    if(arr.length < 2){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(sort(left), sort(right))
}

function merge(left, right){
    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        result.push(
            left[leftIdx] < right[rightIdx] ?
            left[leftIdx++]:
            right[rightIdx++]
        )
    }
    return result.concat(left.slice(leftIdx), right.slice(rightIdx));
}

import {test} from 'ava'
test(t=>t.deepEqual(sort([11,12,3,9,10,5]), [3,5,9,10,11,12]))