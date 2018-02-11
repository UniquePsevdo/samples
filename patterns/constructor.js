/*
class Person{
    constructor(name, age){
        this.name = name;
        this.gae = age;
    }
}*/


//Object.prototype.constructor
// Возвращает ссылку на функцию Object, создавшую прототип экземпляра.
// Обратите внимание, что значение этого свойства является ссылкой на саму функцию, а не строкой, содержащей имя функции.

function Person(name, age){
    this.name = name;
    this.age = age;
}