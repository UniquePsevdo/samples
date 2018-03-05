/*function throttle(fn, delay=100){
    let timer = null;
    return (...args)=>{
        if(!timer){
            timer = setTimeout(()=>{
                fn.call(this, args)
                timer = null;
            }, delay)
        }
    }
}*/

function throttle(fn, delay){
    let timer = null;

    return(...args)=>{
        if(!timer){
            timer = setTimeout(()=>{
                fn.call(this, args)
                timer = null;
            }, delay)

        }
    }

}

function sayHi(event) {
    console.log('Hi!', this, event.type);
}

// Start
const throttled = throttle(sayHi, 500);
//window.addEventListener('mousemove', throttled);

import {test} from 'ava';
test(t =>{

})