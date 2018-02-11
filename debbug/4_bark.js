function Dog(name) {
    console.log('test')
    this.name = name
}
Dog.bark = function() {
    console.log(this.name + ' says woof')
}
Dog.bark();
/*Dog.prototype.bark = function() {
    console.log(this.name + ' says woof')
}
let fido = new Dog('fido')
fido.bark()*/
