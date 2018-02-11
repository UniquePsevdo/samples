function permute(str){
    return permuteArr(str.split(''))
}

function flatten(arr){
    return arr.reduce((acc, curr)=>acc.concat(curr), [])
}

function without(arr, a){
    let result = [...arr]
    result.splice(arr.indexOf(a), 1)
    return result
}

function permuteArr(arr){
    if(arr.length < 2){
        return arr
    }
    return flatten(arr.map(a => permuteArr(without(arr, a)).map((b)=>a.concat(b))))
}

// tests
import { test } from 'ava'

test(t => t.deepEqual(permute(''), []))
test(t => t.deepEqual(permute('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']))