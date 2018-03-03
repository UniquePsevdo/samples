function isPrime(val){
    if(val < 2){
        return false
    }
    for(let i = 2; i < Math.ceil(Math.sqrt(val)); i++){
        if(val % i===0 || i!==val){
            return false;
        }
    }
    return true;
}

import {test} from 'ava'
test('4 is not a prime number', t=>t.falsy(isPrime(4)))
test('13 is a prime number', t=>t.truthy(isPrime(13)))