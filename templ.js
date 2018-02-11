class Observable{
    constructor(){
        this.observers = []
    }
    subscribe(observer){
        let index = this.observers.indexOf(observer)
        if(index === -1){
            this.observers.push(observer)
        }
    }

    unsubscribe(observer){
        let index = this.observers.indexOf(observer);
        if(index > -1){
            this.observers.splice(index, 1);
        }
    }

    notifyAll(){
        for(let observer of this.observers){
            observer.notify()
        }
    }

    notify(observer){
        observer.onNotify();
    }
}
class Observer{
    constructor(id){
        this.id = id;
    }

    onNotify(){
        console.log(this.id + ' has been notified')
    }
}

let observable = new Observable();
let observer1 = new Observer('1');