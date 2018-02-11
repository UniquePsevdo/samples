// суть в том чтобы в цикле пройтись по массиву
// внутри ввести переменные next и  current

function isSorted(arr){
    for(let i=0; i < arr.length; i++){
        let next = arr[i+1];
        let current = arr[i];
        if(next && current >= next){
            return false
        }
    }
    return true;
}

import {test} from 'ava'

test('is sorted [1,2,3,4,5,6,7,8,9]', t=>t.truthy(isSorted([1,2,3,4,5,6,7,8,9])))