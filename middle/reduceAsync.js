/*
let reduceAsync = async function (arr, fn, val){
    for(let a of arr){
        val = fn(val, await a())
    }
    return val
}
*/

let reduceAsync = async (arr, fn, val)=>{
    for(let a of arr){
        val = fn(val, await a())
    }
    return val;
}

import { test } from 'ava'

/*
test(async t => {
    let a = () => Promise.resolve('a')
    let b = () => Promise.resolve('b')
    let c = () => new Promise(resolve => { setTimeout(()=>{resolve('c')}, 100)})

    t.deepEqual(['a', 'b', 'c'], await reduceAsync([a, b, c], (acc, current) => [...acc, current], []))
    t.deepEqual(['d', 'a', 'b', 'c'], await reduceAsync([a, b, c], (acc, current) => [...acc, current], ['d']))

})*/
test(async t=>{
    let a = () => Promise.resolve('a');
    let b = () => Promise.resolve('b');
    let c = () => new Promise(resolve => setTimeout(()=>{resolve('c')}))
    t.deepEqual(['a', 'b', 'c'], await reduceAsync([a, b, c], (acc, curr)=>[...acc, curr], []))
})