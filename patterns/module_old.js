// 1
var Test = (function (){
    var privateProp = 'private property';

    function myMethod() {
        console.log('myMethod')
    }

    return {
        getData: function(prop2){
            return privateProp + ' ' + prop2
        },
        publicProp: 'public property'
    }
})()

console.log(Test.getData('prop 2'))
console.log(Test.publicProp);
Test.publicProp = Test.publicProp + ' changed' ;
console.log(Test.publicProp)


// 2 Revealing

var Exposer = (function() {
    var privateVariable = 10;

    var privateMethod = function() {
        console.log('Inside a private method!');
        privateVariable++;
    }

    var methodToExpose = function() {
        console.log('This is a method I want to expose!');
    }

    var otherMethodIWantToExpose = function() {
        privateMethod();
    }

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined