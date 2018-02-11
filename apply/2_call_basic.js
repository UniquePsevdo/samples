//arrow function will not work in this case
let add = function(c){
    console.log(this.a + this.b + c)
}

let obj = {
    a: 1,
    b: 2
}
add.call(obj, 2)