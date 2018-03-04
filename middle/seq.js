 let seq = async(arr)=>{
    let result = []
    for(let a of arr){
        result.push(await a())
    }
    return result
 }
import {test} from 'ava'

test(async t=>{
    let a = () => Promise.resolve(('a'));
    let b = () => Promise.resolve('b')
    let c = () => new Promise(resolve=>setTimeout(()=>{resolve('c')}))
    t.deepEqual(['a','b','c'], await seq([a,b,c]))
})
