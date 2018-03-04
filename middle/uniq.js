/*
function uniq(arr){
    let seen = {}
    return arr.reduce((result, current)=>{
        if(!seen[current]){
            seen[current] = true
            result.push(current)
        }
        return result
    },[])
}
*/

function uniq(arr){
    let seen = {};
    return arr.reduce((acc, curr)=>{
        if(!seen[curr]){
            seen[curr] = true;
            acc.push(curr)
        }
        return acc;
    }, [])
}

import {test} from 'ava'
test(t=>t.deepEqual(uniq([1, 4, 2, 2, 3, 4, 8]), [1, 4, 2, 3, 8]))