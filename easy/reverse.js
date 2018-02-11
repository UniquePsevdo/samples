function reverse(str){
let strArr = str.split('')
    let result = ''
    for(let i=strArr.length - 1; i >= 0 ; i--){
    result+= strArr[i]
    }
    return result;
}

import {test} from 'ava'

test(t=>t.is(reverse('12345'), '54321'))