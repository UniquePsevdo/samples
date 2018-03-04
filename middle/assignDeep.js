/*
function assignDeep(target, ...sources){
    for(let source of sources){
        for( let key in source){
            if(isObject(source[key])){
                if(!isObject(target[key])){
                    target[key] = {}
                }
                assignDeep(target[key], source[key])
            }else{
                target[key] = source[key]
            }
        }
    }
    return target
}
*/

function assignDeep(target, ...sources){
    for(let source of sources){
        for(let key in source){
            if(isObject(source[key])){
                if(!isObject(target[key])){
                    target[key] = {}
                }
                return assignDeep(target[key], source[key])
            }else{
                target[key] = source[key];
            }
        }
    }
    return target;
}

function isObject(obj){
    return (typeof obj === 'object' && obj !== null)
}

import {test} from 'ava'
test(t=>t.deepEqual(assignDeep({a:1}, {b:2}), {a:1, b:2}))