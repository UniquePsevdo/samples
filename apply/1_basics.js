let obj = {num:2};
let obj2 = {num:5};
let addToThis = function(a, b, c){
    return this.num + a + b + c;
}

console.log(addToThis.call(obj, 1, 2, 3));  // functionName.call(object, arguments)

var arr = [1,2,3];

console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr))

let bound = addToThis.bind(obj);    //returns function bound to obj
console.log(bound(1,2,3))