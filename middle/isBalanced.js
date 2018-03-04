function isBalanced(str){
    let stack = new Stack();
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case '{':
            case '[':
            case '(':
                stack.push(arr[i]);
                break;
            case '}':
            case ']':
            case ')':
                if(pairOf(stack.peek()) === arr[i]){
                    stack.pop();
                }else{
                    return false;
                }

        }
    }
    return stack.items.length === 0;

}

let pairs = {
    '{':'}',
    '(':')',
    '[':']'
}

function pairOf(key){
    return pairs[key];
}

class Stack {
    constructor(){
        this.items = [];
    }

    pop(){
        this.items.pop();
    }

    push(item){
        this.items.push(item)
    }

    peek(){
        return this.items[this.items.length - 1];
    }
}


import {test} from 'ava'
test(t=>t.truthy(isBalanced('(foo { bar (baz) [boo] })')))
test(t=>t.falsy(isBalanced('foo { bar { baz }')))