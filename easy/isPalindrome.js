function isPalindrome(str){
    let strArr = str.split('');
    for(let i=0; i < strArr.length; i++){
        if(strArr[i]!==strArr[strArr.length -1 - i]){
            return false
        }
    }
    return true
}

import {test} from 'ava'

test('palindrome is false 1023321', t=>t.falsy(isPalindrome('1023321')))
test('palindrome is true 123321', t=>t.truthy(isPalindrome('123321')))