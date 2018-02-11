let instance = null;

class MySingleton{
    constructor(){
        if(!instance){
            instance = this
        }
        this.time = Date.now()
        return instance
    }
}

let single = new MySingleton()
console.log(single.time);

setTimeout(function(){
    let single = new MySingleton();
    console.log(single.time);
},2000);