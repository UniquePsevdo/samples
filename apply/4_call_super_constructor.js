let Mammal = function(legs){
    this.legs = legs
}

let Cat = function(legs, isDimasticated){
    Mammal.call(this, legs)
    this.isDimasticated = isDimasticated;
}

let lion = new Cat(4, false);
console.log(lion)