class HashMap{
    constructor(){
        this.data = []
    }

    /*get(key){
        let index = hash(key)
        let slot = this.data[index]
        if(!slot){
            return undefined
        }
        for(let [k, v] of slot){
            if(k===key){
                return v
            }
        }
    }

    set(key, value){
        let index = hash(key)
        if(!this.data[index]){
            this.data[index] = [];
        }
        let slot = this.data[index];
        let entryIdx = 0;
        while(slot[entryIdx]){
            if(slot[entryIdx][0]===key){
                break;
            }
            entryIdx++
        }
        slot[entryIdx] = [key, value]
    }*/

    get(key){
        let index = hash(key);
        let slot = this.data[index];
        if(!slot){
            return undefined;
        }
        for(let [k, v] of slot){
            if(k===key){
                return v;
            }
        }
    }

    set(key, value){
        let index = hash(key);
        if(!this.data[index]){
            this.data[index] = [];
        }
        let slot = this.data[index];
        let entryIdx = 0;
        while(slot[entryIdx]){
            if(slot[entryIdx][0]===key){
                break;
            }
            entryIdx++;
        }
        slot[entryIdx] = [key, value];
    }
}

// hash function (provided)
function hash(string) {
    return string
        .split('')
        .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

/// tests

import { test } from 'ava'

test('HashMap', t => {
    let map = new HashMap()
    map.set('abc', 123)
    map.set('foo', 'bar')
    map.set('foo', 'baz')
    t.is(map.get('abc'), 123)
    t.is(map.get('foo'), 'baz')
    t.is(map.get('def'), undefined)
})
