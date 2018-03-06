import { test } from 'ava'

/*
function bs(arr){
    for(let i = arr.length - 1; i > 1; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
*/

function bs(arr){
    for(let i = arr.length-1; i > 1; i--){
        for(let j = 0; j < i; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

//test
test(t => t.deepEqual(bs([]), []))
test(t => t.deepEqual(bs([-4, 1, Infinity, 3, 3, 0]), [-4, 0, 1, 3, 3, Infinity]))
