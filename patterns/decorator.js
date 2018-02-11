class Coffee {
    constructor(price){
        this.price = price
    }
    getPrice(){
        return this.price;
    }
}

const small = coffee =>{
    const price = coffee.getPrice()
    coffee.getPrice = () =>{
        return price - 1
    }
}

const large = coffee =>{
    const price = coffee.getPrice()
    coffee.getPrice = () =>{
        return price + 2
    }
}
const milk = coffee =>{
    const price = coffee.getPrice()
    coffee.getPrice = () =>{
        return price + 1
    }
}

const sugar = coffee =>{
    const price = coffee.getPrice()
    coffee.getPrice = () =>{
        return price + 1
    }
}

const largeMilkSugar = coffee =>{
    large(coffee);
    milk(coffee);
    sugar(coffee);
    const price = coffee.getPrice();
    coffee.getPrice = ()=>{
        return price;
    }
}


const coffee = new Coffee(5);
small(coffee);
console.log('small coffee: ', coffee.getPrice());

const coffee2 = new Coffee(5);
largeMilkSugar(coffee2)
console.log('large milk sugar', coffee2.getPrice());