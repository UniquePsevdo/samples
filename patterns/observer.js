class Observable {
    constructor(){
        this.observers = [];
    }

    subscribe(observer){
        console.log(observer.getNumber() + ' subscribed');
        this.observers.push(observer);
    }

    unsubscribe(observer){
        for(let obs of this.observers){
            if(obs.number === observer.number){
                console.log(obs.getNumber() + ' unsubscribed');
            }
        }
    }

    notify(observer, data){
        let index = this.observers.indexOf(observer);
        if(index > -1){
            this.observers[index].onNotify(data)
        }
    }

    notifyAll(data){
        for(let observer of this.observers){
            observer.onNotify(data);
        }
    }


}

class Observer{
    constructor(number){
        this.number = number
    }

    getNumber(){
        return this.number;
    }

    onNotify(data){
        console.log(data);
    }
}

let observable = new Observable();

let observer1 = new Observer('1');
let observer2 = new Observer('2');
let observer3 = new Observer('3');
let observer4 = new Observer('4');
let observer5 = new Observer('5');

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);
observable.subscribe(observer4);
observable.subscribe(observer5);

observable.notify(observer1, {msg : 'Hello observer1!'});
observable.unsubscribe(observer1);
observable.notifyAll({msg : 'Hello!'});