let arr1 = [1,2,3,9,0,5]
let arr2 = [11,12,3,9,10,5]

/*
function intersect(arr1, arr2){
    let seen = arr1.reduce((seen, current)=>{
        seen[current] = true;
        return seen;
    }, {});
    return arr2.reduce((result, current)=>{
        if(seen[current]){
            result.push(current);
        }
        return result;
    }, [])

}
*/

function intersect(arr1, arr2){
    let seen = {}
    arr1.reduce((acc, curr)=>{
        seen[curr] = true
        return seen
    }, {})

    return arr2.reduce((acc, curr)=>{
        if(seen[curr]){
            acc.push(curr)
        }
        return acc
    }, [])
}

import {test} from 'ava'
test(t=>t.deepEqual(intersect(arr1, arr2),[3,9,5]))