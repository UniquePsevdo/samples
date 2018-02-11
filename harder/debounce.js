/*function debounce(fn, delay) {      //= 0

    let last = {
        time: null,
        timerId: null
    }

    return () => {
        let time = Date.now()
        if (last.time && (time - last.time) < delay) {
            clearTimeout(last.timerId)
        }
        last = {
            time,
            timerId: setTimeout(fn, delay)
        }
    }
}*/
function debounce(fn, delay=0){
    let last = {
        time: null,
        timerId:null
    }
    return ()=>{
        let time = Date.now()
        if(last.time && (time - last.time) < delay){
            clearTimeout(last.timerId)
        }
        last = {
            time,
            timerId : setTimeout(fn, delay)
        }
    }
}
/// test

import { test } from 'ava'

test.cb(t=>{
    t.plan(1)
    let counter = 0
    let a = ()=>{
        counter++;
        t.is(1, counter);
        t.end()
    }
    let b = debounce(a, 100);
    b()
    b()
    b()
})
