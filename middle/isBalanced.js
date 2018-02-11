function isBalanced(str){
    let stack = new Stack();
    for(let letter of str){
        switch(letter){
            case '{':
            case '(':
            case '[':
                stack.push(letter)
                break;
            case '}':
            case ')':
            case ']':
                if(letter===pairOf(stack.peek())){
                    stack.pop()
                }else{
                    return false
                }
        }
    }
    return stack.items.length === 0
}

class Stack {
    constructor(){
        this.items = []
    }
    push(val){
        this.items.push(val)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
}

function pairOf(key){
    return pairs[key]
}

let pairs = {
    '{':'}',
    '(':')',
    '[':']'
}

import {test} from 'ava'
test(t=>t.truthy(isBalanced('(foo { bar (baz) [boo] })')))
test(t=>t.falsy(isBalanced('foo { bar { baz }')))