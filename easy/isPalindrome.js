function isPalindrome(str){
    let arr = str.split('');
    for(let i =0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length-1-i]){
            return false
        }
    }
    return true;
}

import {test} from 'ava'

test('palindrome is false 1023321', t=>t.falsy(isPalindrome('1023321')))
test('palindrome is true 123321', t=>t.truthy(isPalindrome('123321')))